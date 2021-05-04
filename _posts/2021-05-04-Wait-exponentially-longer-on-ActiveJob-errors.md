---
layout: post
title: "Wait exponentially longer on ActiveJob errors"
category: "rails"
date: 2021-05-04
---

> `:wait` - Re-enqueues the job with a delay specified either in seconds (default: 3 seconds), as a computing proc that takes the number of executions so far as an argument, or as a symbol reference of `:exponentially_longer`, which applies the wait algorithm of `((executions**4) + (Kernel.rand * (executions**4) * jitter)) + 2` (first wait ~3s, then ~18s, then ~83s, etc)

Source: [ActiveJob::Exceptions::ClassMethods](https://edgeapi.rubyonrails.org/classes/ActiveJob/Exceptions/ClassMethods.html)
