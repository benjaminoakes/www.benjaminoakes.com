---
title: count_by in Ruby
date: 2014-01-24T21:57:52+00:00
author: Ben
layout: post
permalink: /2014/01/24/count_by-in-ruby/
categories:
  - Ruby
tags:
  - count
  - count_by
  - enumerable
  - helper
  - MIT
  - OpenSource
  - Ruby
---
This is just a simple addition to Ruby&#8217;s `Enumerable` that both [Dan Bernier](http://invisibleblocks.com/) and I agreed should be a part of Ruby&#8217;s standard library.

```ruby
# count_by.rb
# License: MIT
#
# Authors: Benjamin Oakes, Dan Bernier

module Enumerable
  def count_by(&block)
    group_by(&block).map { |criteria, group| [criteria, group.count] }
  end
end

require 'minitest/spec'
require 'minitest/autorun'

describe 'count_by' do
  it 'counts the groups' do
    counts = %w(a b b c d d e e e e).count_by { |s| s }
    assert_equal(counts, [["a", 1], ["b", 2], ["c", 1], ["d", 2], ["e", 4]])
  end
end
```
