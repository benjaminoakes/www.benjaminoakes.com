---
id: 321
title: Disabling RdRand in Linux
date: 2013-09-10T23:08:04+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=321
permalink: /2013/09/10/disabling-rdrand-in-linux/
openid_comments:
  - 'a:1:{i:0;i:5429;}'
categories:
  - Linux
  - Open Source
  - Today I Learned
tags:
  - Hacker News
  - kernel
  - Linus
  - NSA
  - PRNG
  - rand
  - RdRand
  - security
---
[Linus Responds To RdRand Petition With Scorn &#8211; Slashdot](http://linux.slashdot.org/story/13/09/10/1311247/linus-responds-to-rdrand-petition-with-scorn?utm_source=rss1.0mainlinkanon&utm_medium=feed).
  
[Torvalds&#8217; response to whether RdRand could be compromised in the Linux kernel | Hacker News](https://news.ycombinator.com/item?id=6359892).
  
[Linus Torvalds responds &#8211; Change.org](http://www.change.org/en-GB/petitions/linus-torvalds-remove-rdrand-from-dev-random-4/responses/9066).

This got a surprising amount of attention, mostly because of one of Linus&#8217; classic responses. My feeling is that it&#8217;s good to question these types of things. However, making a petition against using a hardware random number generator, and including some vague concerns about the NSA probably isn&#8217;t quite the right way to go about it.

Anyway, I learned today (from a [Slashdot comment](http://linux.slashdot.org/comments.pl?sid=4191765&cid=44807433)) that you can simply pass `nordrand` to the kernel to disable RdRand if you really don&#8217;t like it. Whether or not &#8220;the NSA&#8221; is on your list of reasons is up to you.