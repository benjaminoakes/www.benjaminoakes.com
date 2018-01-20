---
title: Test upcoming browsers automatically via jsTestDriver
date: 2012-02-24T16:40:00+00:00
author: Ben
layout: post
permalink: /2012/02/24/test-upcoming-browsers-automatically-via-jstestdriver/
categories:
  - GitHub
  - JavaScript
  - Open Source
  - Technology
  - Testing
---
We&#8217;ve been using [jsTestDriver](http://code.google.com/p/js-test-driver/) (JSTD) along with the [Jasmine](http://pivotal.github.com/jasmine/) BDD library via [jasmine-jstd-adapter](https://github.com/ibolmo/jasmine-jstd-adapter). We&#8217;re also using some glue code I wrote called [jasmine-jstd-conf](https://github.com/hedgeyedev/jasmine-jstd-conf) which writes a jsTestDriver config file based on `jasmine.yml`.

Right now, we have some older, mostly-unused machines running a bunch of browsers attached to JSTD. While doing some maintenance today, I had an interesting idea: we need to support the browsers that are popular according to our analytics. That typically means the current and previous version, except for IE, which we support 7.0+ (9.0 is current).

However, we also need to support the **next** version of any popular browser. &nbsp;Since Chrome and Firefox both have a beta channel of what is likey to be released as the next version, we can easily test whether any of our JavaScript will break in the new version of those browsers _before_ they&#8217;re released and _before_ a user runs into a problem we could have detected earlier.

So, we now have Chrome 16, 17 (current), and 18, along with Firefox 9, 10 (current), and 11.

Here&#8217;s some sample JSTD output from a Jasmine test suite we have:

<pre><code class="no-highlight">Chrome 16.0.912.77 Windows: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (267.00 ms)
Chrome 17.0.963.56 Mac OS: Run 100 tests (Passed: 100; Fails: 0; Errors 0) (318.00 ms)
Chrome 17.0.963.56 Windows: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (196.00 ms)
Chrome 18.0.1025.39 Mac OS: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (209.00 ms)
Firefox 9.0.1 Mac OS: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (681.00 ms)
Firefox 9.0.1 Windows: Run 50 tests (Passed: 49; Fails: 1; Errors 0) (1598.00 ms)
Firefox 10.0 Windows: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (293.00 ms)
Firefox 10.0.2 Mac OS: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (260.00 ms)
Firefox 11.0 Mac OS: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (368.00 ms)
Microsoft Internet Explorer 7.0 Windows: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (2749.00 ms)
Microsoft Internet Explorer 8.0 Windows: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (2078.00 ms)
Microsoft Internet Explorer 9.0 Windows: Run 100 tests (Passed: 100; Fails: 0; Errors 0) (698.00 ms)
Safari 534.52.7 Mac OS: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (1553.00 ms)
Safari 6533.18.5 iPhone OS: Run 50 tests (Passed: 50; Fails: 0; Errors 0) (184.00 ms)
</code></pre>

With that many JavaScript implementations to support, writing automated tests only makes sense.

You might also be interested in the [Testing Toolbox slides](http://benjaminoakes.github.com/testing_toolbox/) I presented at the [NewHaven.rb October Lightning Talks](http://www.meetup.com/newhavenrb/events/36030682/).