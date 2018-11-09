---
layout: post
title: "TIL: \"create table like\" in SQL"
category: "database"
date: 2018-11-09
---

News to me: you can copy the schema of an existing table using `like`:

```
create table new_table like existing_table;
```

This is useful for scratch tables like so:

```
create table new_table like existing_table;
insert into new_table (select * from existing_table);
```
