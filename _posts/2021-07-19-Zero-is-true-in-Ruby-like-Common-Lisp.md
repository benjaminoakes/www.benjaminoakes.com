---
layout: post
title: "Zero is true in Ruby, like Common Lisp"
category: "ruby"
date: 2021-07-19
---

> In Common Lisp, 0 is also treated as true. For example, the following code returns true.
>
> ```lisp
> (if 0 'true 'false)
> ```
>
> No doubt, Ruby is following the same design decision made in Lisp. In Lisp, only an empty list (represented by `nil`) is false.

Source: [Why Treat 0 as True in Ruby? - Stack Overflow](https://stackoverflow.com/questions/10387515/why-treat-0-as-true-in-ruby)

This came up in discussion with a non-Rubyist recently.  This is the historical context that I suspect as well.  That said, it would be nice to have it be confirmed by Matz.
