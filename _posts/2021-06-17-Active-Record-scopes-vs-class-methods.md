---
layout: post
title: "Active Record scopes vs class methods"
category: "rails"
date: 2021-06-17
---

> Here at Plataformatec we use Github Pull Requests a lot for code review and this usually yields tons of constructive comments and excellent discussions from time to time. One of the recent topics was about whether we should use scopes or class methods throughout the project to be consistent. Its also not hard to find discussions about it all over the internet. The classic comment usually boils down to "there is no difference between them" or "it is a matter of taste". I tend to agree with both sentences, but Id like to show some slight differences that exist between both.

Source: [Active Record scopes vs class methods - Plataformatec Blog](https://blog.plataformatec.com.br/2013/02/active-record-scopes-vs-class-methods/) via [Ruby on Rails ActiveRecord scopes vs class methods - StackOverflow](https://stackoverflow.com/questions/32930312/ruby-on-rails-activerecord-scopes-vs-class-methods)

Personally, I tend towards class methods and other Ruby built-ins, primarily because I write plenty of Ruby without Rails.
