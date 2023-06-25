---
layout: post
title: "Windows NT on 600MHz machine opens apps instantly. What happened?"
category: ""
date: 2023-06-25
---

Source: [Windows NT on 600MHz machine opens apps instantly. What happened?](https://news.ycombinator.com/item?id=36446933)

I agree with a lot of the comments here, especially this:

>Even worse is the new trend of web pages optimizing for page load time. You wind up with a page that loads "instantly" but has almost none of the data you need displayed. Instead there are 2 or 3 AJAX requests to load the data & populate the DOM. Each one results in a repaint, wasting CPU and causing the page content to move around.

Loading spinners are an anti-pattern. We shouldn't use them unless we absolutely have to.
