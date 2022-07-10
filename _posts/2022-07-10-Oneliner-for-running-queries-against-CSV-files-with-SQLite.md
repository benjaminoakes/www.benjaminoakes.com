---
layout: post
title: "One-liner for running queries against CSV files with SQLite"
category: "databases"
date: 2022-07-10
---

>I figured out how to run a SQL query directly against a CSV file using the sqlite3 command-line utility:

```
sqlite3 :memory: -cmd '.mode csv' -cmd '.import taxi.csv taxi' \
  'SELECT passenger_count, COUNT(*), AVG(total_amount) FROM taxi GROUP BY passenger_count'
```

Source: [One-liner for running queries against CSV files with SQLite](https://til.simonwillison.net/sqlite/one-line-csv-operations)

Looks handy.
