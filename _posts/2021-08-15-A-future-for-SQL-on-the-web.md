---
layout: post
title: "A future for SQL on the web"
category: "web"
date: 2021-08-15
---

>The end result is absurd-sql, and its a persistent backend for SQLite on the web. That means it doesnt have to load the whole db into memory, and writes persist. In this post I will explain the absurdities of the webs storage APIs (mainly IndexedDB), show how SQLite provides a 10x perf improvement, explain all the cool tricks that make it work, and explain the locking/transactional semantics that make it robust.

Source: [A future for SQL on the web](https://jlongster.com/future-sql-web)

Every time I've tried IndexedDB, I've been sorely disappointed. I haven't found a wrapper that's workable either. Hopefully, having real SQLite (again) is better!
