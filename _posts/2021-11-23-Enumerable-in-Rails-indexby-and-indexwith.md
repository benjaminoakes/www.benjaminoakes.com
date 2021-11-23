---
layout: post
title: "Enumerable in Rails: index_by and index_with"
category: "ruby"
date: 2021-11-23
---

> `index_by()`
>
> Convert an enumerable to a hash, using the block result as the key and the element as the value.

Source: [Enumerable: index_by](https://api.rubyonrails.org/classes/Enumerable.html#method-i-index_by)

> `index_with(default = INDEX_WITH_DEFAULT)`
>
> Convert an enumerable to a hash, using the element as the key and the block result as the value.

Source: [Enumerable: index_with](https://api.rubyonrails.org/classes/Enumerable.html#method-i-index_with)

New to me.  These seem nice, and a good replacement for some incantations with `Hash[]`.
