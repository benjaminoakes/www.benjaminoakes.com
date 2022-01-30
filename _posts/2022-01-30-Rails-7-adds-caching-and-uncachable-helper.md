---
layout: post
title: "Rails 7 adds caching? and uncachable! helper"
category: "rails"
date: 2022-01-30
---

> We often hear Cache invalidation is a hard problem in computer science and could cause bugs but sometimes, caching something that should not be cached is a potential source of bugs and security vulnerabilities. Rails has a built-in mechanism for Fragment Caching, which stores part of the rendered view as a fragment. For subsequent requests, the pre-saved fragment is used instead of rendering it again.
>
> But this could cause some serious bugs! For example, we could have an S3 URL helper which generates a unique presigned URL for each product or one could write a form helper that outputs a request-specific auth token. In such cases, it is better to avoid fragment caching.

Source: [Rails 7 adds caching? and uncachable! helper - Saeloun Blog](https://blog.saeloun.com/2021/12/08/rails-7-adds-cacheable-helper)

Way better than just adding a comment saying "don't cache this,"
