---
id: 123
title: 'throw/catch vs. raise/rescue'
date: 2011-03-22T02:13:41+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=123
permalink: /2011/03/22/throwcatch-vs-raiserescue/
categories:
  - Ruby
tags:
  - catch
  - raise
  - rescue
  - throw
---
Just a piece of Ruby trivia: Ruby has _both_ `throw`/`catch` as well as `raise`/`rescue`. Most newbie Rubyists don&#8217;t know this. There&#8217;s a [section of the Pickaxe book](http://ruby.activeventure.com/programmingruby/book/tut_exceptions.html) that discusses them both.

Essentially, `rescue` is used for exceptions and error control while `catch` is used for symbols and flow control. The idea is that you shouldn&#8217;t use exceptions to change the flow of your program, but rather to handle errors.
