---
id: 340
title: The Rails Testing Pyramid
date: 2013-10-09T14:47:04+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=340
permalink: /2013/10/09/the-rails-testing-pyramid/
categories:
  - Programming
  - Rails
  - Ruby
tags:
  - acceptance
  - pyramid
  - service
  - tdd
  - testing
  - unit
---
[The Rails Testing Pyramid](http://blog.codeclimate.com/blog/2013/10/09/rails-testing-pyramid).

We&#8217;ve fallen into doing most of what this blog post recommends, which was a nice surprise. Personally, I&#8217;m not the best at &#8220;throwaway tests&#8221;, but that&#8217;s something I&#8217;ll be keeping in mind.

**Gist:** test behavior and edge cases at the unit level (the most tests, base of pyramid), test core integration and &#8220;non-unit&#8221; functionality at the service level (fewer tests, middle of pyramid), and test only critical UI flows at the acceptance level (fewest tests, top of pyramid).