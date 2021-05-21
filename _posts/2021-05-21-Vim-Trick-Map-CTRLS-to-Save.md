---
layout: post
title: "Vim Trick: Map CTRL+S to Save"
category: "programming"
date: 2021-05-21
---

```vim
nnoremap <silent><c-s> :<c-u>update<cr>
vnoremap <silent><c-s> <c-c>:update<cr>gv
inoremap <silent><c-s> <c-o>:update<cr>
```

Source: [Vim Trick: Map CTRL+S to Save :: rockyourcode](https://www.rockyourcode.com/vim-trick-map-ctrl-s-to-save/)

It's always seemed like `vim` should have something like this by default instead of `:w`.  I'll try it.
