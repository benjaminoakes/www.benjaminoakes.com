---
layout: post
title: "The Difference Between load, autoload, require, and require_relative in Ruby"
category: "ruby"
date: 2023-02-08
---

> 1. Use `load` to pick up any changes you made to a file while the program is running.
> 2. Use `autoload` to speed up the initialization of your library by lazily loading the modules.
> 3. Use `require` when you want to use external gems.
> 4. Use `require_relative` for local files relative to the current working directory.

Source: [The Difference Between load, autoload, require, and require_relative in Ruby](https://www.akshaykhot.com/difference-between-load-autoload-require-in-ruby/)

Huh, I could have sworn that `autoload` was frowned upon and possibly even deprecated.  (Something I recall Matz mentioning long ago.)  Anyway, this is a good summary!
