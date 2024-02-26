---
layout: post
title: "Ruby 3.1 / URI::RFC2396_Parser#make_regexp"
category: ""
date: 2024-02-26
---

>Returns `Regexp` that is default `self.regexp[:ABS_URI_REF]`, unless schemes is provided. Then it is a `Regexp.union` with `self.pattern[:X_ABS_URI]`.

Source: [Ruby 3.1 / URI::RFC2396_Parser#make_regexp -- DevDocs](https://devdocs.io/ruby~3.1/uri/rfc2396_parser#method-i-make_regexp)

Good for identifying URLs.
