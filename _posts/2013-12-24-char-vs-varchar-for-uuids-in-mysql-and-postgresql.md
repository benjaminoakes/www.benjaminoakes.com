---
id: 410
title: char vs varchar for UUIDs in MySQL and PostgreSQL
date: 2013-12-24T18:14:44+00:00
author: Ben
layout: post
permalink: /2013/12/24/char-vs-varchar-for-uuids-in-mysql-and-postgresql/
categories:
  - MySQL
  - PostgreSQL
tags:
  - mysql
  - performance
  - postgres
  - postgresql
  - uuid
---
I spent some time today evaluating whether switching columns that store UUIDs from `varchar(255)` to `char(36)` (or `binary`, etc) would result in any noticeable performance improvement in MySQL. It does seem like it could make an improvement, but not enough to be worth the effort in our case.

What I learned from researching today:

  * Both [MySQL](http://dba.stackexchange.com/questions/2640/what-is-the-performance-impact-of-using-char-vs-varchar-on-a-fixed-size-field) and [PostgeSQL](http://dba.stackexchange.com/questions/2640/what-is-the-performance-impact-of-using-char-vs-varchar-on-a-fixed-size-field) support the same syntax for declaring `char` columns
  * PostgeSQL stores `char` and `varchar` columns the same way, so any performance boost in MySQL wouldn&#8217;t be reflected in PostgreSQL ([source](http://stackoverflow.com/questions/5536444/rails-migration-for-creating-a-fixed-length-char12-column))
. Also, PostgreSQL has a native UUID type, so it&#8217;s kind of a wash.

  * The number of variable-width columns in a row can make a significant difference in performance. ([This post claimed a 20% speed improvement by switching to `ROW_FORMAT=fixed`](http://dba.stackexchange.com/questions/2640/what-is-the-performance-impact-of-using-char-vs-varchar-on-a-fixed-size-field), which seems related but maybe not the same.)
  * It&#8217;s more likely to make a difference if the column is indexed ([source](http://stackoverflow.com/questions/12161933/varchar-char-or-binary-to-improve-mysql-performance))
  * [`varchar` takes extra memory to store a prefix](http://stackoverflow.com/questions/10526176/mysql-varchar-or-char-for-fixed-length-string), which I presume to describe the length which `char` would not need
  * Storing UUIDs in a non-character column could make sense, but since `UUID()` returns characters anyway, [it&#8217;s going against the grain](http://forums.mysql.com/read.php?98,49626,51650#msg-51650).

If I&#8217;m wrong about what I took away from reading today, please let me know in the comments. I&#8217;d love to learn more about this.