---
layout: post
title:  "ABC Metric"
date:   2017-11-01
---

> ABC is strictly a software size metric, although it has often been misconstrued as a complexity metric.
>
> [...]
>
> * Assignment -- an explicit transfer of data into a variable, e.g. `= *= /= %= += <<= >>= &= |= ^= >>>= ++ --`
> * Branch -- an explicit forward program branch out of scope -- a function call, class method call, or new operator
> * Condition -- a logical/Boolean test, `== != <= >= < > else case default try catch ?` and unary conditionals.
>
> A scalar ABC size value (or "aggregate magnitude") is computed as:
>
>     |ABC| = sqrt((A*A)+(B*B)+(C*C))

Source: [Abc Metric](http://wiki.c2.com/?AbcMetric)
