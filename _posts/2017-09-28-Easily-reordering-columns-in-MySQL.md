---
layout: post
title:  "Tip: Easily reordering columns in MySQL"
date:   2017-09-28
---

I'll sometimes get columns out of order because of Rails migrations.

**Tip:** you can drag and drop columns in Sequel Pro on the "Structure" tab to resolve this type of thing.  (No need for running a query that does `AFTER whatever`.)

And just a reminder, you can add columns with the `AFTER` syntax to specify where in the table they appear:

    add_column :name, "VARCHAR(255) AFTER title"
