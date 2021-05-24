---
layout: post
title: "How to use delegated types in Rails 6.1"
category: "ruby"
date: 2021-05-24
---

> All of these solutions have benefits and drawbacks, all of which have already been covered by folks much smarter than me. But I do have one advantageIm starting from scratch, so I can use the latest tech.
>
> And lo and behold, just last month, DHH (the creator and BDFL of Rails) [put up a PR](https://github.com/rails/rails/pull/39341) for a new solution called delegated type. Its definitely worth clicking through to read DHHs description of the problem hes trying to solve. I wont go into them here, but I did want to outline some of the problems I had getting this to work as theres not a lot of documentation out there.

Source: [How to use delegated types in Rails 6.1 - Steven Buccini](https://stevenbuccini.com/how-to-use-delegate-types-in-rails-6-1)

I haven't looked at this long enough to know why it's better than an STI (funny acronym, that), but next time I need to use polymorphism, I'll keep delegated types in mind.
