---
id: 305
title: Filtering on MIME type in Maid
date: 2013-09-10T03:12:51+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=305
permalink: /2013/09/10/filtering-on-mime-type-in-maid/
categories:
  - Programming
  - Ruby
tags:
  - filter
  - maid
  - mime
---
From [recent issue on GitHub](https://github.com/benjaminoakes/maid/issues/105):

> Yep, that will be a part of Maid v0.4.0.
> 
> I&#8217;ve released some [alpha builds](http://rubygems.org/gems/maid/versions/0.4.0.alpha.2) (which are probably closer to beta quality), if you&#8217;d like to start playing with that functionality. I&#8217;d like to do some more testing to make sure everything works as expected, has a nice syntax, etc. Unfortunately, we&#8217;re in the middle of moving to a new place, so my time is limited right now.
> 
> Beta testing is always **very** appreciated, so if you have comments on how this feature works, please share! The method you want is probably `where_content_type()`. There are [some examples in the documentation](https://github.com/benjaminoakes/maid/blob/master/lib/maid/tools.rb#L563).