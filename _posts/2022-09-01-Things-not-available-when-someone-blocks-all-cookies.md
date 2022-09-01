---
layout: post
title: "Things not available when someone blocks all cookies"
category: "web"
date: 2022-09-01
---

>Turns out, with all cookies blocked, Chrome disables a lot of (all?) APIs that can be used to persist data and thus potentially profile users.

Source: [Things not available when someone blocks all cookies](https://blog.tomayac.com/2022/08/30/things-not-available-when-someone-blocks-all-cookies/)

Makes sense, but I would suggest a "null" implementation that doesn't persist to disk, but acts the same otherwise 
