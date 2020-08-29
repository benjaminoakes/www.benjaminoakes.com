---
layout: post
title: "SQL execution order doesn't start with SELECT"
category: "SQL"
date: 2020-08-29
---

> In a non-image format, the order is:
> 
> `FROM`/`JOIN` and all the `ON` conditions
> `WHERE`
> `GROUP BY`
> `HAVING`
> `SELECT` (including window functions)
> `ORDER BY`
> `LIMIT`

Source: [SQL queries don't start with SELECT](https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/)

Handy to have in mind when thinking about performance.
