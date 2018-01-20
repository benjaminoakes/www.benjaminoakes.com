---
id: 335
title: Superclass mismatch when inheriting from Struct.new
date: 2013-10-15T03:23:39+00:00
author: Ben
layout: post
permalink: /2013/10/15/superclass-mismatch-when-inheriting-from-struct-new/
openid_comments:
  - 'a:1:{i:0;i:22840;}'
categories:
  - Ruby
tags:
  - class
  - DelayedJob
  - inheritance
  - struct
  - TypeError
---
We recently ran into an error that took a little thought:

<pre><code class="no-highlight">TypeError: superclass mismatch for class FooJob
</code></pre>

Specifically, `FooJob` was a DelayedJob custom job class. Unfortunately, [DelayedJob had recommended a structure like this](https://github.com/collectiveidea/delayed_job#custom-jobs):

<pre><code class="ruby">class FooJob &lt; Struct.new(:bar, :baz)
  def perform
    # ...
  end
end
</code></pre>

When this class was required more than once, it gave us our `TypeError`. (I think it was loaded from two different paths.) Although the two structs made by `Struct.new` were created with the same arguments, they're actually different objects, hence the superclass mismatch.

Moral of the story: you should [never inherit from `Struct`](https://u.osu.edu/gee.24/2012/12/13/dont-inherit-from-struct/)! Do this instead:

<pre><code class="ruby">FooJob = Struct.new(:bar, :baz) do
  def perform
    # ...
  end
end
</code></pre>

After that change, our `TypeError` went away. Good to know!

**Update:** I [submitted a pull request](https://github.com/collectiveidea/delayed_job/pull/590) to hopefully prevent other people from falling into this same trap.

#### Reactions

<blockquote class="twitter-tweet">
  <p>
    <a href="https://twitter.com/benjaminoakes">@benjaminoakes</a> Ha, I almost sent that exact same PR ~6 mos. ago. <a href="https://twitter.com/search?q=%23theniforgot&src=hash">#theniforgot</a>
  </p>
  
  <p>
    &mdash; Jordan ⋈ Running (@swirlee) <a href="https://twitter.com/swirlee/statuses/389992880766345216">October 15, 2013</a>
  </p>
</blockquote>

<blockquote class="twitter-tweet">
  <p>
    <a href="https://twitter.com/benjaminoakes">@benjaminoakes</a> Interesting, I've used inheritance before. Good to know - thanks for posting!
  </p>
  
  <p>
    &mdash; Jason Wieringa (@jwieringa) <a href="https://twitter.com/jwieringa/statuses/390109399206752257">October 15, 2013</a>
  </p>
</blockquote>