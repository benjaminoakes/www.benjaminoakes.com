---
layout: post
title: "Ruby's New Exception Keyword Arguments"
date: 2018-05-15
---

> In Ruby 2.6, a variety of Kernel methods get a new `exception: false` or `exception: true` keyword argument. When Kernel methods fail, some raise an error and some just return `nil`. This new feature lets you override that default behavior.

Source: [Ruby's New Exception Keyword Arguments - Square Corner Blog - Medium](https://medium.com/square-corner-blog/rubys-new-exception-keyword-arguments-4d5bbb504d37)

Nice.  Especially good if you can `exception: false` and use `respond_to?` for better performance.
