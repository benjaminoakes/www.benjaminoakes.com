---
layout: post
title:  "module_function vs extend self"
date:   2017-11-10
---

> One of the never-ending style battles in Ruby land is `module_function` vs `extend self`.
>
> Both enable you to define module methods, which can be called not only from instance level, but also from class level. This enables you to make modules that can optionally be `include`'d into your current scope, which makes sense if the module contains non-state changing methods ("functions").

Source: [Idiosyncratic Ruby: Self Improvement](https://idiosyncratic-ruby.com/8-self-improvement.html)
