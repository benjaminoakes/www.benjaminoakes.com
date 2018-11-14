---
layout: post
title: "Using lazy enumerators to work with large files in Ruby"
category: "ruby"
date: 2018-11-14
---

> Enumerators are at the heart of what makes Ruby such a powerful, dynamic language. And lazy enumerators take this a step further by allowing you to efficiently work with extremely large collections.
>
> Files - it turns out - are just large collections of lines or characters. So lazy enumerators make it possible to to some very interesting and powerful things with them.

Source: [Using lazy enumerators to work with large files in Ruby](https://blog.honeybadger.io/using-lazy-enumerators-to-work-with-large-files-in-ruby/)

I needed to do some one-off processing on a multi-gigabyte text file in Ruby today.  If you're not already familiar with lazy enumerators in Ruby, they're handy for situations like this.

```
File.open(in_file) do |file|
  file.
    each_line.
    lazy. # 
    drop(1). # We don't want the header
    map { |line| JSON.parse(clean_line(line)) }.
    # first(count).
    each.
    with_index do |json, index|
      json_text = JSON.pretty_generate(json)
      # ...
```
