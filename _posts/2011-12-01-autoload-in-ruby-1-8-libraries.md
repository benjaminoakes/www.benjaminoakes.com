---
id: 140
title: autoload in Ruby 1.8 and Rails
date: 2011-12-01T13:54:47+00:00
author: Ben
layout: post
permalink: /2011/12/01/autoload-in-ruby-1-8-libraries/
categories:
  - Rails
  - Ruby
---
Just a PSA from a recent Ruby discussion:

Ruby&#8217;s `autoload` works fine if you&#8217;re using it in a gem that&#8217;s loaded **once** (and need to use it on Ruby 1.8, vs. `require_relative` in Ruby 1.9+), but if `autoload` is used in a collection of Ruby classes or modules in a folder that&#8217;s in the Rails load path, then it&#8217;s probably not a good idea. You&#8217;ll get unexpected reloading behavior, at a minimum. That applies to submodules too, of course.

In general, you don&#8217;t want to mess with `$LOAD_PATH`, which was a fairly common practice in 1.8. That&#8217;s largely gone away in 1.9 with the advent of `require_relative`, but many gems need to be backwards compatible. In Ruby 1.8, you can always futz around with `__FILE__`, but that gets messy as well.