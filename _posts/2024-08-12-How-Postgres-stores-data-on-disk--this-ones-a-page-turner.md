---
layout: post
title: "How Postgres stores data on disk -- this one's a page turner"
date: 2024-08-12
---

> To start things off, I'm going to discuss how Postgres actually stores
data on disk. It's interesting! It helps understand how Postgres queries
your data on disk, how MVCC works and lots more that's really useful when
you're trying to gain a deep understanding of how your database works for
the purpose of fine-tuning performance. If you restart the server, Postgres
will wipe clean the whole unlogged table because it will restore the
database state from the WAL. However, if you copy out the raw database
files, you can use the knowledge you have gained from this post to recover
the contents of the data.

Source: [How Postgres stores data on disk -- this one's a page turner -
drew's dev blog](
https://drew.silcock.dev/blog/how-postgres-stores-data-on-disk/)

