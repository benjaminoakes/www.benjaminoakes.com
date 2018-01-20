---
title: 'Snippet: Play latest NBC Nightly News fullscreen'
date: 2010-07-01T12:24:54+00:00
author: Ben
layout: post
permalink: /2010/07/01/snippet-play-latest-nbc-nightly-news-fullscreen/
categories:
  - GitHub
  - Snippets
tags:
  - applescript
  - news
  - podcast
  - quicktime
---
This is the first of a series of posts about code I have in my [GitHub repositories](http://www.github.com/benjaminoakes).

I&#8217;m often annoyed that I have to wait for iTunes to download the [NBC Nightly News podcast](http://www.msnbc.msn.com/id/8132577/) so I can watch it in the morning. I also don&#8217;t like iTunes&#8217; video player much -- it&#8217;s slow and crashes all the time. (Why Apple hasn&#8217;t ported iTunes from Carbon to Cocoa is sometimes beyond me... but I&#8217;m sure it will happen eventually.)

Recently, I found out that NBC always publishes their podcast to the same location every day, so it was easy to make an AppleScript to open it in QuickTime X. QuickTime X starts playing it right away, without making me have to wait for it to download completely (or wait for iTunes to catch up with me).

It&#8217;s actually quite a simple script. Unfortunately, I couldn&#8217;t find a `fullscreen` verb for QuickTime X, so I had to use [Jacob Rus&#8217; `menu_click` method](http://www.macosxhints.com/article.php?story=20060921045743404).

See more at [my snippets repository on GitHub](http://github.com/benjaminoakes/snippets/).

[Download](http://github.com/benjaminoakes/snippets/raw/master/applescript/Play%20latest%20NBC%20Nightly%20News%20fullscreen.applescript)
