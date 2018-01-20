---
id: 449
title: Ruby gotchas
date: 2014-02-27T19:22:46+00:00
author: Ben
layout: post
permalink: /2014/02/27/ruby-gotchas/
categories:
  - Ruby
tags:
  - gotchas
---
<div>
  From <a href="http://blog.elpassion.com/ruby-gotchas/?utm_source=rubyweekly&utm_medium=email" target="_blank">Ruby Gotchas that will come back to haunt you</a>.
</div>

I figure we should all be aware of these:

<div>
  <ul>
    <li>
      and / or is NOT the same as && / ||
    </li>
    <li>
      eql? is NOT the same as == (and NOT the same as equal? or ===)
    </li>
    <li>
      super is NOT the same as super()
    </li>
    <li>
      Your exception must not be an Exception
    </li>
    <li>
      class Foo::Bar is NOT the same as module Foo; class Bar
    </li>
    <li>
      Most bang! methods return nil when they do nothing
    </li>
    <li>
      attribute=(value) method always returns passed value, regardless of method return value
    </li>
    <li>
      private will NOT make your self.method private
    </li>
  </ul>
</div>

<div>
  I personally didn&#8217;t know the <code>attribute=</code> one.  I hope this helps fill out our shared Ruby knowledge.
</div>