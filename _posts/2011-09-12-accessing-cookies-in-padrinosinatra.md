---
title: Accessing Cookies in Padrino/Sinatra
date: 2011-09-12T15:50:12+00:00
author: Ben
layout: post
permalink: /2011/09/12/accessing-cookies-in-padrinosinatra/
categories:
  - Ruby
tags:
  - cookies
  - Padrino
  - Ruby
---
Unlike in Rails, there is no global `cookies` object in Padrino or Sinatra. Instead, you need to use `request.cookies` within your request handler:

```ruby
get :index do
  my_value = request.cookies['my_value']
end
```