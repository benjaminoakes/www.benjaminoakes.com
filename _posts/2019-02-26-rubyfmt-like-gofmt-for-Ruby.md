---
layout: post
title: "rubyfmt, like gofmt for Ruby"
category: "ruby"
date: 2019-02-26
---

> Rubyfmt is an autoformatter for Ruby that deals with all the layout of your ruby code for you. It's inspired by [gofmt](https://golang.org/cmd/gofmt/) in that it wants to be in your editor's after save hook, and just run every time you save your file. This means that it should be fast. Currently it seems to run in close to 50ms on even large ruby files. It's also inspired by [standard](https://github.com/testdouble/standard). Rubyfmt has no configuration options as to how it actually formats your files. Rather, we're aiming to achieve an output format that follows well established Ruby community norms.

Source: [samphippen/rubyfmt](https://github.com/samphippen/rubyfmt)

Rubocop is a little too opinionated sometimes so `rubyfmt` could be a good thing.
