---
layout: post
title: "Rails: Using greater than/less than with a where statement"
category: "ruby"
date: 2021-09-28
---

> **Bonus**
> 
> Starting in Rails 5 you can also do this with dates!
> 
>     User.where(created_at: 3.days.ago..DateTime::Infinity.new)
> 
> will generate the SQL
> 
>     SELECT `users`.* FROM `users` WHERE (`users`.`created_at` >= '2018-07-07 17:00:51')
> 
> **Double Bonus**
> 
> Once Ruby 2.6 is released (December 25, 2018) you'll be able to use the new infinite range syntax! Instead of `201..Float::INFINITY` you'll be able to just write `201..`. More info [in this blog post](https://medium.com/square-corner-blog/rubys-new-infinite-range-syntax-0-97777cf06270).

Source: [Rails: Using greater than/less than with a where statement - Stack Overflow](https://stackoverflow.com/questions/11317662/rails-using-greater-than-less-than-with-a-where-statement)

The `Date.tomorrow..` syntax is much more readable than some `Arel` incantation including `gt`.  I'll actually remember this compared to the `Arel` version.
