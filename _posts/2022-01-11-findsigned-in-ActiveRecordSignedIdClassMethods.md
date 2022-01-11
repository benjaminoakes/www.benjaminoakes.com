---
layout: post
title: "find_signed in ActiveRecord::SignedId::ClassMethods"
category: "rails"
date: 2022-01-11
---

> Lets you find a record based on a signed id that's safe to put into the world without risk of tampering. This is particularly useful for things like password reset or email verification, where you want the bearer of the signed id to be able to interact with the underlying record, but usually only within a certain time period.

Source: [ActiveRecord::SignedId::ClassMethods](https://api.rubyonrails.org/v6.1.4.1/classes/ActiveRecord/SignedId/ClassMethods.html#method-i-find_signed)

Seems to be pretty similar to signed [Global IDs](https://github.com/rails/globalid).  The latter is available as a URI, but otherwise, there's quite a bit of overlap.
