---
layout: post
title: "Discover how to apply a macOS preference from the command line"
category: "automation"
date: 2018-08-23
---

> For when you want to figure out how to apply some macOS preference from the command line, without Googling for hours for out-of-date defaults commands:
>
> ```
> $ defaults read | pbcopy
> # make changes in System Preferences.app
> $ diff -u -F '^ "' <(pbpaste) <(defaults read)
> ```

Source: [Filippo Valsorda on Twitter](https://twitter.com/filosottile/status/1016495719665020935)
