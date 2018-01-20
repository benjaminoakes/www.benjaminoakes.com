---
title: Using dom_id with a presenter (or other objects)
date: 2013-08-30T18:12:25+00:00
author: Ben
layout: post
permalink: /2013/08/30/using-dom_id-with-a-presenter-or-other-objects/
categories:
  - Rails
  - Ruby
  - Snippets
  - Technology
---
[We](https://github.com/ContinuityControl) have been using presenters much more often in our Rails code, with the goal of having views only use [“Mustache-level”](http://mustache.github.io/) logic (conditionals, loops, and interpolation). We’ve been happy with the results so far; it really cleans up the views, and moves logic to easily testable objects. In fact, most tests for presenters can be [fast specs](http://www.benjaminoakes.com/2013/04/05/fast-specs/) and still test well.

I’ve gotten the impression that not everyone does presenters the same way, so before getting to the code I’ll clarify. Our presenters are decorator-like, with a restriction that they only transform values, not make any lasting changes to them. Methods are typically “opted-in” for use in the presenter using `def_delegators` from [`Forwardable`](http://www.ruby-doc.org/stdlib-2.0/libdoc/forwardable/rdoc/Forwardable.html). For a simple example, `PersonPresenter` might have a method called `full_name` that combines `first_name` and `last_name`; the `Person` class only manages the persistance of `first_name` and `last_name`. That is, presenters wrap an object with methods for presentation to a human.

Not all of Rails makes this pattern easy to use. We ran into an issue recently when calling `dom_id()` in a view. This was our code, roughly:

<pre><code class="ruby"># File: app/presenters/foo_presenter.rb
class FooPresenter
  def initialize(foo)
    @foo = foo
  end

  def bar
    # ...
  end

  # ...
end

# File: app/controllers/foos_controller.rb
class FoosController &lt; ApplicationController
  def show
    foo = Foo.find(params[:id])
    # It's nice to only have to expose a single object to the view.
    @foo_presenter = FooPresenter.new(foo)
  end

  # ...
end
</code></pre>

<pre><code class="html"># File: app/views/foos/show.html.erb
&lt;span id="&lt;%= dom_id(@foo_presenter) %&gt;"&gt;&lt;%= @foo_presenter.bar %&gt;&lt;/span&gt;</code></pre>

And this is the error we got:

<pre><code class="no-highlight">ActionView::Template::Error (undefined method `to_key' for #&lt;FooPresenter:0x007fc782994a98&gt;):
1: &lt;span id="&lt;%= dom_id(foo_presenter) %&gt;"&gt;&lt;%= foo_presenter.bar %&gt;&lt;/span&gt;
[...]</code></pre>

The obvious fix would be to add a `to_key` method that just delegates to the model, but that quickly became a [rabbit hole](http://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland#Synopsis). Many more methods were needed, and I quickly gave up.

It turns out that `dom_id()` follows a protocol in that it will call `to_model` on whatever’s passed in. We can use that to solve our problem. (`ActiveRecord` objects just return `self`, as you might imagine.) Here’s the fix:

<pre><code class="ruby"># File: app/presenters/foo_presenter.rb
def FooPresenter
  # ... (previous content)

  def to_model
    @foo
  end
end</code></pre>

Now the presenter can be used with `dom_id()`, delegating to the presented model. It’s a surprisingly simple solution. :)

(Versions: Ruby 2.0.0, Rails 3.2.12)