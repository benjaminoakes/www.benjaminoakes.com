---
layout: post
title: "Performance impact of the memoization idiom on modern Ruby"
category: ""
date: 2023-10-25
---

> As demonstrated in the above benchmarks, over-use of the memoization pattern can cause a degradation of performance in your Ruby programs, so it can be effective to eagerly initialize instance variables in the constructor to avoid this, at least in hot spots. [...]  My rule of thumb is that one or two memoized variables in a class are fine, but more than that likely deserve a quick refactor to eagerly initialize the variables to `nil` in the constructor.

Source: [Performance impact of the memoization idiom on modern Ruby](https://railsatscale.com/2023-10-24-memoization-pattern-and-object-shapes/)

Got it, so it's allocation-related so we can force the allocation of an instance variable in the constructor.  That makes sense, but I wonder what Ruby can do to detect that automatically.
