---
layout: post
title: "Notes on how to use vim-surround"
date: 2018-04-11
---

Starting with:

```ruby
let(:foo) { (bar + [baz]) }
```

`ds(` while on or within `(` turns this into:

```ruby
let(:foo) { bar + [baz] }
```

`ds[` while on or within `[` turns this into:

```ruby
let(:foo) { bar + baz }
```

Get it here: [tpope/vim-surround](https://github.com/tpope/vim-surround)
