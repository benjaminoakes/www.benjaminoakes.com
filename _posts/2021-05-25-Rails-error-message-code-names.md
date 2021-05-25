---
layout: post
title: "Rails error message code names"
category: "ruby"
date: 2021-05-25
---

> Consider a User model with a validation for the name attribute like this:
>
> ```ruby
> class User < ApplicationRecord
>   validates :name, presence: true
> end
> ```
>
> The key for the error message in this case is `:blank`. Active Record will look up this key in the namespaces:

Source: [Rails Internationalization (I18n) API - Ruby on Rails Guides](https://guides.rubyonrails.org/i18n.html#error-message-interpolation)

This link contains a table of all the message names for use with `config/locales/en.yml` (or any other locale).  The names are somewhat arbitrary, so it's handy to have this for reference.
