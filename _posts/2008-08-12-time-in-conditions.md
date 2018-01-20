---
id: 19
title: Time in :conditions
date: 2008-08-12T12:43:05+00:00
author: Ben
layout: post
permalink: /2008/08/12/time-in-conditions/
categories:
  - Rails
tags:
  - datetime
  - find
  - named_scope
  - Rails
---
It took me quite a while to figure out that `Time` objects aren&#8217;t treated exactly as you might expect when using `:conditions` in a `find` or `named_scope`. From what I can tell, without extra help, `Time` objects are just treated as dates. This is fine if you&#8217;re checking conditions like I was outside the same day, but not if they are in the same day. This came up in writing a unit test for a model. My tests for the named scopes weren&#8217;t testing within the same day (i.e. only for values like `2.days.ago`), so they passed, but other tests that expected to be able to set the open and close dates to a time within the same day would fail (confusingly).

So, it was incorrect to use the following, because Rails was treating them like a `:date` instead of a `:datetime`.

```ruby
named_scope :active, lambda { now = Time.now; {:conditions => ['? > open_date and ? < close_date', now, now] } }
```

Instead, the following was used to make sure the time parts are included:

```ruby
named_scope :active, lambda { now = Time.now; {:conditions => ['? > open_date and ? < close_date', now.to_s(:sql), now.to_s(:sql)] } }
```