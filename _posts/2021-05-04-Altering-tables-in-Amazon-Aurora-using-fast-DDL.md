---
layout: post
title: "Altering tables in Amazon Aurora using fast DDL"
category: "db"
date: 2021-05-04
---

> In Amazon Aurora, you can use fast DDL to run an ALTER TABLE operation in place, nearly instantaneously. The operation completes without requiring the table to be copied and without having a material impact on other DML statements. Because the operation doesn't consume temporary storage for a table copy, it makes DDL statements practical even for large tables on small instance classes.
>
> **Important**
>
> Currently, Aurora lab mode must be enabled to use fast DDL for Aurora MySQL. We don't [recommend] using fast DDL for production DB clusters. For information about enabling Aurora lab mode, see Amazon Aurora MySQL lab mode.

Source: [Altering tables in Amazon Aurora using fast DDL - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.FastDDL.html)

Definitely interesting, but I guess I don't get the point if it's not production-ready.
