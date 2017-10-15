---
id: 487
title: Sleeping longer during business hours
date: 2014-04-18T19:52:31+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=487
permalink: /2014/04/18/sleeping-longer-during-business-hours/
openid_comments:
  - 'a:2:{i:0;i:5648;i:1;i:5649;}'
categories:
  - Ruby
tags:
  - Ruby
  - sleep
  - wait
---
This is just a simple trick to sleep longer during business hours. Useful if there&#8217;s a long running task that needs to avoid hammering a resource (e.g. a shared database) during the day, but not during the night.

<pre><code class="ruby">sleep (7..18).include?(Time.now.hour) ? 3 : 0
</code></pre>