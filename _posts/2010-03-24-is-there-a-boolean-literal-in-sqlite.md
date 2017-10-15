---
id: 227
title: Is there a boolean literal in SQLite?
date: 2010-03-24T11:00:50+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=227
permalink: /2010/03/24/is-there-a-boolean-literal-in-sqlite/
categories:
  - API
  - Programming
  - SQLite
---
From [my question on StackOverflow](http://stackoverflow.com/questions/2510652/is-there-a-boolean-literal-in-sqlite) ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)):

> I know about the `boolean` _column type_, but is there a `boolean` _literal_ in SQLite? In other languages, this might be `true` or `false`. Obviously, I can use `` and `1`, but I tend to avoid so-called &#8220;magic numbers&#8221; where possible.
> 
> From [this list](http://troels.arvin.dk/db/rdbms/#data_types-boolean), it seems like it might exist in other SQL implementations, but not SQLite. (I&#8217;m using SQLite 3.6.10, for what it&#8217;s worth.)