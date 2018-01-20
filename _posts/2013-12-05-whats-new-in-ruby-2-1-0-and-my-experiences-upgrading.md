---
title: 'What&#8217;s new in Ruby 2.1.0?  (And my experiences upgrading)'
date: 2013-12-05T05:09:48+00:00
author: Ben
layout: post
permalink: /2013/12/05/whats-new-in-ruby-2-1-0-and-my-experiences-upgrading/
categories:
  - Ruby
tags:
  - 2.1.0
  - 2.1.0-preview2
  - ArgumentError
  - FakeFS
  - maid
  - Ruby
---
Ruby 2.1.0 preview2 is out, and the ruby-core team is planning to release 2.1.0 on Christmas Day, 2013.

To stay on top of the changes, I did some research on the release notes provided on the ruby-lang site (see below for links). The first level of bullets is verbatim from the release notes, the second level are my notes. I hope they help clarify some of the changes in the pipeline!

## preview1 {#preview1}

  * VM (method cache) 
      * `klasscache`, see [ko1 pg 19](http://www.atdot.net/~ko1/activities/toruby05-ko1.pdf#19)
      * Same algorithm as JRuby and Rubinius
      * Not just a global method cache anymore
  * RGenGC (See ko1&#8217;s RubyKaigi presentation and EuRuKo presentation) 
      * Restricted generational garbage collector
      * Faster than &#8220;mark and sweep&#8221; (M&S)
      * &#8220;True&#8221; generational GC would have caused compat problems
      * Complications with the C extension API
  * Refinements
  * Syntax 
      * Required keyword arguments now have a syntax
      * `def foo(bar: 2)` defaults `bar` to 2 if not present, `def foo(bar:)` requires `bar`
      * Pre-2.1.0, you could do `def foo(bar: bar)` to a similar effet
  * Decimal Literal 
      * Pre-2.1.0: `Rational(1, 2)`, 2.1.0 and later: `1/2r`
      * Lets you represent fractions without the normal pain associated with IEEE floating point
  * Frozen String Literal 
      * `"bar"f`, frozen string... looks funky
      * This syntax was dropped, see preview2
  * def&#8217;s return value 
      * name symbol, now you can do `private def foo`
      * seems like it might interfere with Rubinus, which returned a method object
  * Bignum
  * 128bit
  * GMP 
      * If available, 128bit math is used for large numbers. Sounds like it&#8217;s provided by [GMP](https://gmplib.org/), the GNU Multiple Precision library
  * String#scrub 
      * Cleans invalid byte sequences
  * Socket.getifaddrs 
      * Accessing Network Interfaces (&#8220;_get_ _i_nter_f_ace _addr_esse_s_&#8220;)
      * Methods like `name` (e.g. `en0`) and `ip_address` (either IPv4 or IPv6)
  * new RubyGems

## preview2 {#preview2}

  * fix Heap Overflow in Floating Point Parsing (CVE-2013-4164)
  * f suffix of String Literal is removed #9042
  * &#8220;literal&#8221;.freeze is now optimized #9042 
      * Backwards compatible syntax! It gets the same optimization of the `f` suffix
      * Freezing Strings can give us some easy optimizations
  * fix memory consuming issue on RGenGC (r43532 and r43755)
  * add Exception#cause [#8257](https://bugs.ruby-lang.org/issues/8257) 
      * Sounds like a canonical implementation of [nested exceptions](http://c2.com/ppr/wiki/JavaIdioms/NestedException.html)
  * update libraries like json, nkf, rake, RubyGems, and RDoc.

## My experiences so far {#myexperiencessofar}

Since the code in [Maid](https://github.com/benjaminoakes/maid) is fairly straightforward, I&#8217;ve been trying to keep it up to date with new Ruby versions. It was a pretty simple update, but I ran into some issues.

While the above bullet points are only the &#8220;notable&#8221; changes, some others are detailed in the [NEWS](https://github.com/ruby/ruby/blob/trunk/NEWS) file. However, I ran into an API change I didn&#8217;t see documented anywhere.

It started by running into a strange ArgumentError when using FakeFS to list the contents of a directory:

<pre><code class="no-highlight">ArgumentError: wrong number of arguments (2 for 1)
</code></pre>

I tracked it down to `Dir.entries` adding an optional second argument between Ruby 2.0.0 and 2.1.0 ([details](http://ruby-doc.org/core-2.1.0/Dir.html)). In Ruby 2.1.0, `Find.find` was calling FakeFS with the optional 2nd argument, which it didn&#8217;t know how to handle. I made [a simple pull request on FakeFS to fix the issue](https://github.com/defunkt/fakefs/pull/209). It was a little difficult to track down, but not too bad. For what it&#8217;s woth, I also ran into some trouble using [`FileUtils.touch` with an `:mtime` option](https://github.com/benjaminoakes/maid/blob/d08b80814178122c9d379985d034103356363ef5/spec/lib/maid/tools_spec.rb#L582), but I might have been using it inappropriately.

Otherwise, I got updated to 2.1.0, as you can see in [the Travis CI build](https://travis-ci.org/benjaminoakes/maid/jobs/14963536). :)

## References {#references}

These are what I read when researching the above. I hope they can help point you to more information.

  * [RubyKaigi Presentation by Heroku&#8217;s Koichi Sasada](http://www.atdot.net/~ko1/activities/toruby05-ko1.pdf). Published 2013-09-21.
  * [ruby-lang.org -- Ruby 2.1.0-preview1 is released](https://www.ruby-lang.org/en/news/2013/09/23/ruby-2-1-0-preview1-is-released/). Published 2013-09-23.
  * [Konstantin Haase -- Ruby 2.1](http://rkh.im/ruby-2.1). Published 2013-09-24.
  * [ruby-lang.org -- Ruby 2.1.0-preview2 is released](https://www.ruby-lang.org/en/news/2013/11/22/ruby-2-1-0-preview2-is-released/). Published 2013-11-22.

**Update (2014-02-05):** [We](http://continuity.net/) have been running Ruby 2.1.0 in production for a few weeks, with very few issues. We had a random MySQL issue that took less than an afternoon to figure out. Overall, the upgrade was fairly painless!