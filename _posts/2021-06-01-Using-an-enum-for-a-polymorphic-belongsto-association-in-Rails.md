---
layout: post
title: "Using an enum for a polymorphic belongs_to association in Rails"
category: "ruby"
date: 2021-06-01
---

> Why not just use a `varchar` and an inclusion validator? It would require some pretty extensive code changes to make enums work here, and I don't think it's a case we need to support. This is more of a feature request, and should probably go on the mailing list.

Source: [If use enum for polymorphic_type, polymorphic associations cannot work well - Issue #17844 - rails/rails](https://github.com/rails/rails/issues/17844#issuecomment-64967832)

In other words, don't use an `enum :x_type` for `belongs_to :x, polymorphic: true`.  Use `validates :x_type, inclusion: [...]` instead.

If done correctly, this can be machine-verifiable documentation for expected types.
