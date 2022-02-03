---
layout: post
title: "The Rails Internationalization (I18n) API includes interpolation for error messages"
category: "rails"
date: 2022-02-03
---

> The translated model name, translated attribute name, and value are always available for interpolation as `model`, `attribute` and `value` respectively.
>
> So, for example, instead of the default error message "cannot be blank" you could use the attribute name like this: `"Please fill in your %{attribute}"`.
>
> `count`, where available, can be used for pluralization if present

Source: [Rails Internationalization (I18n) API - Ruby on Rails Guides](https://guides.rubyonrails.org/i18n.html#error-message-interpolation)

I find that not everyone knows this, so I thought I'd share.
