---
title: Multi-line Memoization
date: 2014-04-02T19:02:08+00:00
author: Ben
layout: post
permalink: /2014/04/02/multi-line-memoization/
categories:
  - Ruby
tags:
  - cache
  - memoize
  - readability
  - Ruby
---
[Multi-line Memoization](http://viget.com/extend/multi-line-memoization).

Memoizing with Ruby&#8217;s `||=` is ugly when there&#8217;s more than one line of code.  The kind folks over at Viget Labs shared this trick:

```ruby
def foo
  @foo ||= begin
    arg1 = expensive_method_1
    arg2 = expensive_method_2
    expensive_method_3(arg1, arg2)
  end
end
```

How did I not already know about this? What a readable solution.
