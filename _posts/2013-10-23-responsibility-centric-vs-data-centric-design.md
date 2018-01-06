---
id: 355
title: Responsibility-centric vs. data-centric design
date: 2013-10-23T00:51:21+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=355
permalink: /2013/10/23/responsibility-centric-vs-data-centric-design/
categories:
  - Ruby
tags:
  - ActiveRecord
  - architecture
  - design
  - Rails
  - responsibility
  - service
  - software engineering
---
[Issue 4.11: Responsibility-centric vs. data-centric design &#8211; Practicing Ruby](https://practicingruby.com/articles/responsibility-centric-vs-data-centric-design?u=dc2ab0f9bb).

A good read; got me thinking about how we should structure our coming projects.  However, my feeling is that in a Rails app, a hybrid approach seems to work well&#8230; leave persistence and querying to ActiveRecord objects, and use services in the way this article suggests.