---
title: 60fps on the mobile web
date: 2015-03-02T18:55:20+00:00
author: Ben
layout: post
permalink: /2015/03/02/60fps-on-the-mobile-web/
categories:
  - Web
tags:
  - canvas
  - mobile
  - performance
  - Web
---
[60fps on the mobile web — Flipboard Engineering](http://engineering.flipboard.com/2015/02/mobile-web/).

> Flipboard launched during the dawn of the smartphone and tablet as a mobile-first experience, allowing us to rethink content layout principles from the web for a more elegant user experience on a variety of touchscreen form factors.
> 
> Now we’re coming full circle and bringing Flipboard to the web. Much of what we do at Flipboard has value independent of what device it’s consumed on: curating the best stories from all the topics, sources, and people that you care about most. Bringing our service to the web was always a logical extension.
> 
> [...]
> 
> Most modern mobile devices have hardware-accelerated canvas, so why couldn’t we take advantage of this? HTML5 games certainly do. But could we really develop an application user interface in canvas?

Using `<canvas>` for everything seems like a bad idea. It means you drop any painting or CSS optimizations, sacrifice any searchability (e.g., Google&#8217;s spiders), and accessibility (e.g., screen readers). It essentially means writing your own display engine, just to get some very particular display behavior. I get it, but all the code they wrote will probably be obsolete in just a few years.