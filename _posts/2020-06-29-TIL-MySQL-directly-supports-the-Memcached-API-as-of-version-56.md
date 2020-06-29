---
layout: post
title: "TIL: MySQL directly supports the Memcached API as of version 5.6"
category: "mysql"
date: 2020-06-29
---

Old news (2013) but new to me:

> In addition, MySQL 5.6 allows NoSQL-style access to InnoDB data via the Memcached API. This means developers can use any of the many existing Memcached clients and libraries to bypass the overhead of query parsing, and grab data as simple key-value pairs, resulting in as much as a 9x performance improvement for SET/INSERT operations.

Source: [Speedy MySQL 5.6 takes aim at NoSQL, MariaDB  The Register](https://www.theregister.com/2013/02/06/oracle_mysql_56_vs_mariadb/)

> The InnoDB memcached plugin (daemon_memcached) provides an integrated memcached daemon that automatically stores and retrieves data from InnoDB tables, turning the MySQL server into a fast key-value store. Instead of formulating queries in SQL, you can use simple get, set, and incr operations that avoid the performance overhead associated with SQL parsing and constructing a query optimization plan. You can also access the same InnoDB tables through SQL for convenience, complex queries, bulk operations, and other strengths of traditional database software.

Source: [MySQL :: MySQL 5.6 Reference Manual :: 14.20 InnoDB memcached Plugin](https://dev.mysql.com/doc/refman/5.6/en/innodb-memcached.html)
