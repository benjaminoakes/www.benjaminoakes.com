---
title: Calculating the next leap year in Ruby
date: 2013-04-02T00:56:35+00:00
author: Ben
layout: post
permalink: /2013/04/02/calculating-the-next-leap-year-in-ruby/
categories:
  - Open Source
  - Programming
  - Rails
  - Ruby
  - Sharing
---
I needed to calculate the next leap year today, and was happy to find out about [`Date.leap?`](http://ruby-doc.org/stdlib-2.0/libdoc/date/rdoc/Date.html#method-c-leap-3F) via [this StackOverflow question](http://stackoverflow.com/questions/1566589/easy-way-to-determine-leap-year-in-ruby).

However, there wasn&#8217;t a built-in way that I could find to get the **next** leap year. It turned out to be pretty simple, but still worth sharing.

<pre><code class="ruby"># next_leap_year.rb
# License: MIT

require &#39;date&#39;

def next_leap_year(year)
  year += 1 until Date.leap?(year)
  year
end

require &#39;minitest/spec&#39;
require &#39;minitest/autorun&#39;

describe &#39;next_leap_year&#39; do
  describe &#39;given a leap year&#39; do
    it &#39;returns the same year&#39; do
      assert_equal(next_leap_year(2012), 2012)
    end
  end

  describe &#39;given a non-leap year&#39; do
    it &#39;returns the next leap year&#39; do
      assert_equal(next_leap_year(2013), 2016)
    end
  end
end</code></pre>