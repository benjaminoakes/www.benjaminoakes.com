---
id: 196
title: All about to_h in Ruby 2.0
date: 2013-03-08T04:04:21+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=196
permalink: /2013/03/08/all-about-to_h-in-ruby-2/
openid_comments:
  - 'a:2:{i:0;i:2834;i:1;i:2879;}'
categories:
  - API
  - Debugging
  - Open Source
  - Presentation
  - Ruby
  - Technology
tags:
  - popular
  - Ruby
  - ruby2
  - to_h
---
I gave a talk at [ICRuby](http://icruby.org) today about Ruby 2.0, partially as a learning experience for myself. I hadn&#8217;t done much with Ruby 2.0 before, and I had fun learning more about what to expect. If you&#8217;d like to see what I presented, [my slides are available](http://media.benjaminoakes.com/2013/03-07-ruby-2-rundown).

A lot of what I showed about Ruby 2.0 was a pretty standard overview, but I paid special attention to `to_h`. I ended up doing some research that I haven&#8217;t seen written up elsewhere, and thought I should share it as a blog post as well.

## What&#8217;s `to_h`? {#whatsto_h}

It&#8217;s a new convention for retrieving a `Hash` representation of an object. When I was first learning Ruby in 2008, I remember expecting `to_h` to exist after learning about `to_s` for `String` and `to_a` for `Array`. In concept, it&#8217;s similar to [`serializable_hash` in Rails](http://api.rubyonrails.org/classes/ActiveModel/Serialization.html) as well. I&#8217;m happy to see this become a part of core Ruby.

## What can I do with it? {#whatcanidowithit}

Now that there&#8217;s an official method for getting the &#8220;`Hash` version&#8221; of an object, you can start to use it in your methods when using a `Hash` makes things easier, or you&#8217;d like to duck type.

Since `to_h` is now a part of Ruby&#8217;s [core](http://ruby-doc.org/core-2.0) and [std-lib](http://ruby-doc.org/stdlib-2.0/), I thought I&#8217;d see how it&#8217;s used.

**A quick word about the examples:** we tend to use `panda` and `bamboo` as [metasyntactic variables](http://en.wikipedia.org/wiki/Metasyntactic_variable) at [Continuity Control](http://continuity.net/), partially because of the great [Jonathan Magen](http://yonkeltron.com/). Plus, they&#8217;re fun compared to plain old `foo` and `bar`.

### Core {#core}

Searching [ruby-doc.org core](http://ruby-doc.org/core-2.0) gave:

  * [`ENV.to_h`](http://ruby-doc.org/core-2.0/ENV.html#method-c-to_h)
  * [`Hash#to_h`](http://ruby-doc.org/core-2.0/Hash.html#method-i-to_h)
  * [`NilClass#to_h`](http://ruby-doc.org/core-2.0/NilClass.html#method-i-to_h)
  * [`Struct#to_h`](http://ruby-doc.org/core-2.0/Struct.html#method-i-to_h)

&#8230;and a handful of aliases called `to_hash`, which were also present in 1.9.

Here&#8217;s what they do:

<pre><code class="language-ruby">ENV.to_h                 # =&gt; {"TERM"=&gt;"xterm", "SHELL"=&gt;"/bin/bash", ...}
{ panda: 'bamboo' }.to_h # =&gt; {:panda=&gt;"bamboo"}
nil.to_h                 # =&gt; {}

s = Struct.new(:panda, :bamboo).new
s.to_h                   # =&gt; {:panda=&gt;nil, :bamboo=&gt;nil}
</code></pre>

### Std-lib {#stdlib}

Searching [ruby-doc.org std-lib](http://ruby-doc.org/stdlib-2.0/) gave:

  * Useful: 
      * [`OpenStruct#to_h`](http://ruby-doc.org/stdlib-2.0/libdoc/ostruct/rdoc/OpenStruct.html#method-i-to_h)
  * Less common: 
      * `JSON::Ext::Generator::State`
      * `XMLRPC::FaultException`
      * `OpenSSL::X509::Extension`

I don&#8217;t have any examples for the latter 3, but `OpenStruct#to_h` is easy to demonstrate:

<pre><code class="language-ruby">require 'ostruct'
os = OpenStruct.new(panda: 'bamboo')
os      # =&gt; #&lt;OpenStruct panda="bamboo"&gt;
os.to_h # =&gt; {:panda=&gt;"bamboo"}
</code></pre>

## Any gotchas? {#anygotchas}

Not everything about `to_h` works the way I&#8217;d expect.

### Arrays {#arrays}

This doesn&#8217;t work:

<pre><code class="language-ruby">%w(panda bamboo).to_h # =&gt; NoMethodError: undefined method `to_h'
</code></pre>

I might have expected behavior like this:

<pre><code class="language-ruby">Hash['panda', 'bamboo'] # =&gt; {"panda"=&gt;"bamboo"}
</code></pre>

That would be especially nice, since then you could convert back and forth from `Array` to `Hash`:

<pre><code class="language-ruby">{ panda: 'bamboo' }.to_a.to_h # =&gt; NoMethodError: undefined method `to_h'
</code></pre>

&#8230;but alas, that&#8217;s just not how it works. However, we can [try to convince matz otherwise](http://bugs.ruby-lang.org/issues/7292).

Something I found by accident: I screwed up `Hash[]` the first time and got a bunch of new warnings on STDERR.

<pre><code class="language-ruby">Hash[['panda', 'bamboo']]
# (irb):5: warning: wrong element type String at 0 (expected array)
# (irb):5: warning: ignoring wrong elements is deprecated, remove them explicitly
# (irb):5: warning: this causes ArgumentError in the next release
</code></pre>

In Ruby 1.9.3, it would print no warnings and simply return `{}`.

### JSON {#json}

I also was hoping JSON would take advantage of `to_h`, since [it&#8217;s now a part of Ruby&#8217;s stdlib](http://www.ruby-doc.org/stdlib-2.0/libdoc/json/rdoc/JSON.html).

<pre><code class="language-ruby">require 'json'
JSON.generate(ENV)
# /usr/local/lib/ruby/2.0.0/json/common.rb:223:in `generate': only generation of JSON objects or arrays allowed (JSON::GeneratorError)
# from /usr/local/lib/ruby/2.0.0/json/common.rb:223:in `generate'
# from tmp/talk_code.rb:3:in `&lt;main&gt;'
</code></pre>

I would have expected something like this:

<pre><code class="language-ruby">require 'json'
# NOTE: This doesn't actually work this way.  Blog skimmers take notice!
JSON.generate(ENV) # =&gt; "{\"TERM\":\"xterm\",\"SHELL\": ...
</code></pre>

Fortunately, you can do this:

<pre><code class="language-ruby">require 'json'
JSON.generate(ENV.to_h) # =&gt; "{\"TERM\":\"xterm\",\"SHELL\": ...
</code></pre>

&#8230;but that feels like an excellent use of `to_h` that should have been a part of `JSON`.

## Enough complaining! Show something useful. {#enoughcomplainingshowsomethinguseful}

Duck typing is probably the most useful use case I can think of. It&#8217;s a good alternative to `Hash[]` in some cases as well.

### `to_h` {#to_h}

Here&#8217;s a simple example. Let&#8217;s say I have a method called `eat`:

<pre><code class="language-ruby">def eat(diet)
  "A panda eats #{ diet[:eats] }"
end
</code></pre>

&#8230;but I want to make sure the `diet` that is passed in is treated like a `Hash`. That&#8217;s possible now:

<pre><code class="language-ruby">def eat(diet)
  "A panda eats #{ diet.to_h[:eats] }"
end

# It works with a Hash
panda_diet = { eats: 'bamboo' }
eat(panda_diet) # =&gt; "A panda eats bamboo"

# ...a Struct
panda_diet = Struct.new(:eats).new('shoots and leaves')
eat(panda_diet) # =&gt; "A panda eats shoots and leaves"

# ...or even nil
eat(nil) # =&gt; "A panda eats "
</code></pre>

### `Hash()` {#hash}

One other addition I noticed (but haven&#8217;t seen mentioned elsewhere) is the new `Hash()` method. It&#8217;s kind of like `Array()` or `String()` in Ruby 1.9.3 and below. These methods let you coerce values, in a sense.

Here&#8217;s an example using `Array`:

<pre><code class="language-ruby">def eat_up(foods)
  # Turns anything into an `Array`:
  #
  #     nil        =&gt; []
  #     'bamboo'   =&gt; ['bamboo']
  #     ['bamboo'] =&gt; ['bamboo']
  #
  Array(foods).each do |food|
    puts eat(eats: food)
  end
end

eat_up(nil)
# [no output]
eat_up('bamboo')
# A panda eats bamboo
eat_up(['bamboo', 'shoots and leaves'])
# A panda eats bamboo
# A panda eats shoots and leaves
</code></pre>

That&#8217;s actually very useful behavior; a lot of annoying type and error checking just goes away. Ever since I first saw [Avdi Grimm](http://about.avdi.org/) present it, I&#8217;ve found [many uses](https://github.com/benjaminoakes/maid/blob/master/lib/maid/tools.rb#L428) for it.

The good news is, you can now do something similar with `Hash()`

<pre><code class="language-ruby">def eat(diet)
  diet = Hash(diet)
  "A panda eats #{ diet[:eats] }"
end

panda_diet = { eats: 'bamboo' }
eat(panda_diet) # =&gt; "A panda eats bamboo"
eat(nil) # =&gt; "A panda eats "
</code></pre>

If used in the right situation, that might just be as useful as `Array()`.

But strangely enough, `Hash()` doesn&#8217;t work exactly like `to_h`:

<pre><code class="language-ruby">Hash([]) # =&gt; {}

Hash(OpenStruct.new)
# TypeError: can't convert OpenStruct into Hash
#     from (irb):100:in `Hash'
#     from (irb):100
#     from /usr/local/bin/irb:12:in `&lt;main&gt;'
</code></pre>

I don&#8217;t currently have an explanation, but unless you need specific behavior from `Hash()`, you may prefer to use `to_h`.

## Slightly less contrived examples {#slightlylesscontrivedexamples}

### Flexible constructor {#flexibleconstructor}

If you have a use case for it, `to_h` could make constructors more flexible:

<pre><code class="language-ruby">class Panda
  def initialize(params)
    params = params.to_h

    @name = params[:name]
    @age = params[:age]
    @weight = params[:weight]
  end
end
</code></pre>

### Flexible constructor with `OpenStruct` {#flexibleconstructorwithopenstruct}

Or even use an `OpenStruct` instead, if you&#8217;d like:

<pre><code class="language-ruby">require 'ostruct'

class Panda
  def initialize(params)
    params = OpenStruct.new(params.to_h)

    @name = params.name
    @age = params.age
    @weight = params.weight
  end
end
</code></pre>

### `OpenStruct` conversion {#openstructconversion}

If you felt like it, you could even refactor that into this:

<pre><code class="language-ruby">require 'ostruct'

# Convert to an `OpenStruct`
def OpenStruct(hash_like)
  OpenStruct.new(hash_like.to_h)
end

env = OpenStruct(ENV)
env.TERM # =&gt; 'xterm'
</code></pre>

### Reusable `to_h` definition {#reusableto_hdefinition}

You could even parameterize how to define `to_h`:

<pre><code class="language-ruby"># Related to my concept of `to_h` back in 2010: https://github.com/benjaminoakes/snippets/blob/master/ruby/to_h.rb
module ConversionHelper
  def pick(*methods)
    h = {}
    methods.each { |m| h[m] = send(m) }
    h
  end
end

class Panda
  include ConversionHelper

  attr_reader :name, :age

  def initialize(params)
    params = OpenStruct.new(params.to_h)

    @name = params.name
    @age = params.age
    @weight = params.weight
  end

  def to_h
    # Pandas are sensitive about their weight, after all...
    pick(:name, :age)
  end
end
</code></pre>

I haven&#8217;t decided whether the last few ideas would actually be useful in practice, but these are the types of things that `Hash()` and `to_h` open up for Rubyists.