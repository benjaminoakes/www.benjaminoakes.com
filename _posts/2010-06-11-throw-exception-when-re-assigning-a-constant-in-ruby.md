---
id: 97
title: Throw exception when re-assigning a constant in Ruby?
date: 2010-06-11T15:03:08+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=97
permalink: /2010/06/11/throw-exception-when-re-assigning-a-constant-in-ruby/
categories:
  - Ruby
tags:
  - constants
  - exceptions
---
This has bothered me for a while, so I made [a question on StackOverflow](http://stackoverflow.com/questions/3023617/throw-exception-when-re-assigning-a-constant-in-ruby):

> I&#8217;ve long been aware that &#8220;constants&#8221; in Ruby (i.e., variable names that are capitalized) aren&#8217;t _really_ constant. Like other programming languages, a reference to an object is the only thing stored in the variable/constant. (Sidebar: Ruby does have the facility to &#8220;freeze&#8221; referenced objects from being modified, which as far as I know, isn&#8217;t an ability offered in many other languages.)
> 
> So here&#8217;s my question: when you re-assign a value into a constant, you get a warning like so:
> 
> ```irb
>> FOO = 'bar'
=> "bar"
>> FOO = 'baz'
(irb):2: warning: already initialized constant FOO
=> "baz"
```
> 
> Is there a way to force Ruby to throw an exception instead of printing a warning?