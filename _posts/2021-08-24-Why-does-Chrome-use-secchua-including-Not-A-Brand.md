---
layout: post
title: "Why does Chrome use sec-ch-ua including \"Not A Brand\"?"
category: "programming"
date: 2021-08-24
---

> [client-hints] GREASEing the Sec-CH-UA list
>
> Randomizing order and string with escaped characters to ensure proper
> parsing and prevent ossification.

Source: [user agent - Why does Chrome use sec-ch-ua: "\"Not\\A;Brand";v="99"? - Stack Overflow](https://stackoverflow.com/questions/64413275/why-does-chrome-use-sec-ch-ua-not-abrandv-99)

That's really interesting.  It's random and wrong on purpose.

Golang does something similar: [randomize iteration order of small maps](https://github.com/golang/go/issues/6719).  Iteration is in a random order so that developers don't depend on it always incrementing.
