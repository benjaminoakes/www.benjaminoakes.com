---
layout: post
title: "All About That Button, 'Bout That Button"
category: ""
date: 2024-07-09
---

>But a framework like Remix encourages writing mutations as declarative HTML that works without -- or, perhaps better stated, before -- JavaScript, using semantic elements like `<form>` and `<button type="submit">`.
>
> [...]
>
> From this starting point of HTML -- which functions before JavaScript loads & executes -- you can then begin to progressively enhance your `<form>` with JavaScript that intercepts default browser behavior (e.g. `<form onSubmit={...}>`) and enhances the experience however you prefer.

Source: [All About That Button, 'Bout That Button](https://blog.jim-nielsen.com/2024/all-about-that-button/)

This makes a lot more sense than what I've experienced in Vue and React, frameworks in which it's common to reimplement browser behavior in JavaScript, negating much of the value of working in the browser.

Remix seems much closer to Stimulus or Unpoly.
