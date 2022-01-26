---
layout: post
title: "In MySQL, never use utf8. Use utf8mb4."
category: "database"
date: 2022-01-26
---

> The utf8 encoding only supports three bytes per character. The real UTF-8 encoding  which everybody uses, including you  needs up to four bytes per character.
>
< MySQL developers never fixed this bug. They released a workaround in 2010: a new character set called utf8mb4.

Source: [In MySQL, never use utf8. Use utf8mb4. - by Adam Hooper](https://adamhooper.medium.com/in-mysql-never-use-utf8-use-utf8mb4-11761243e434)

This is such a common problem, it's not even funny.  We shouldn't need linters for this.  They should release a new major version of MySQL that makes utf8 correct and makes any tables that can't transition the be defined as utf8mb3.  It's a breaking change but it's reasonable to avoid this problem moving forward.
