---
layout: post
title: "Meet the top layer: a solution to z-index:10000"
category: "web"
date: 2022-09-06
---

>The top layer sits above its related document in the browser viewport, and each document has one associated top layer. This means that elements promoted to the top layer needn't worry about z-index or DOM hierarchy. They also get a neat ::backdrop pseudo-element to play with. 

Source: [Meet the top layer: a solution to z-index:10000](https://developer.chrome.com/blog/what-is-the-top-layer/)

Seems like an obvious idea in retrospect.
