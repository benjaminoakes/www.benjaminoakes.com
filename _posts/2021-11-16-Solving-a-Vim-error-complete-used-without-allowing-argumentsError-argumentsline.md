---
layout: post
title: "Solving a Vim error: -complete used without allowing argumentsError, argumentsline"
category: "programming"
date: 2021-11-16
---

I've been getting these messages at startup since upgrading vim:

```
$ vim
Error detected while processing [...]/.vim/plugged/tlib_vim/plugin/02tlib.vim:
line   77: E1208: -complete used without allowing argumentsError detected while processing [...]/.vim/plugged/vim-fugitive/plugin/fugitive.vim:
line  470: E1208: -complete used without allowing argumentsline  471: E1208: -complete used without allowing argumentsline  475: E1208: -complete used without allowing argumentsline  478: E1208: -complete used without allowing arguments
Press ENTER or type command to continue
```

I guess Vim broke their interface and all plugin authors had to react.  Upgrading `02tlib.vim` and `vim-fugitive` were enough to fix it for me.

Here are some relevant links:

- [E1208: Error detected while processing /usr/share/vim/vimfiles/plugin/fugitive.vim  Issue #1791  tpope/vim-fugitive](https://github.com/tpope/vim-fugitive/issues/1791)
- [Remove unnecessary -complete on command with no arguments  tpope/vim-fugitive@4cdeff8](https://github.com/tpope/vim-fugitive/commit/4cdeff8c33ec2fe0686324bf1846ce158c452754)
- [Fix error E1208 raised by vim >=8.2.3141  tomtom/tlib_vim@b5f9f6c](https://github.com/tomtom/tlib_vim/commit/b5f9f6c83ade9b5640580bf9792a332dd453dfd0)
- [patch 8.2.3141: no error when using :complete for :command without -n  vim/vim@de69a73](https://github.com/vim/vim/commit/de69a7353e9bec552e15dbe3706a9f4e88080fce)
