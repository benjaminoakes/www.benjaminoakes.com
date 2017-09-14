---
layout: post
title:  "Hash#compact"
date:   2017-09-14
---

> Returns a hash with non `nil` values.
>
>     hash = { a: true, b: false, c: nil }
>     hash.compact        # => { a: true, b: false }
>     hash                # => { a: true, b: false, c: nil }
>     { c: nil }.compact  # => {}
>     { c: true }.compact # => { c: true }

Source: [Hash](http://api.rubyonrails.org/classes/Hash.html#method-i-compact)

A little like `Array#compact`.  Handy!
