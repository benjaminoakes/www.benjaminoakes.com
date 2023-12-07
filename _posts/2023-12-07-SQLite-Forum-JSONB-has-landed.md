---
layout: post
title: "SQLite Forum: JSONB has landed"
date: 2023-12-07
---

> JSONB is a rewrite of the SQLite JSON functions that, depending on usage
patterns, could be several times faster than the original JSON functions.
The JSONB rewrite changes the internal-use binary representation of JSON
into a contiguous byte array that can read or written as an SQL BLOB. This
allows the internal-use representation of JSON to potentially be saved to
the database, in place of JSON text, eliminating the overhead of steps 1
and 3. Any JSON function that accepts JSON text as an input will now also
accept JSONB binary content for that same parameter.

Source: [SQLite Forum: JSONB has landed](
https://sqlite.org/forum/forumpost/fa6f64e3dc1a5d97)

