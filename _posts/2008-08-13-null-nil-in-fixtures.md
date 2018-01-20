---
id: 18
title: NULL (nil) in fixtures
date: 2008-08-13T11:38:13+00:00
author: Ben
layout: post
permalink: /2008/08/13/null-nil-in-fixtures/
categories:
  - Rails
tags:
  - mssql
  - Rails
  - sqlite
  - yaml
---
I was developing against SQLite for a while and didn’t notice that I had accidentally put `"NULL"` (i.e. as a string) in the fixtures. SQLite didn’t care about this, but MSSQL certainly did. Because I specified constraints on the column widths, I got the error:

<pre><code class="no-highlight">ActiveRecord::StatementInvalid: DBI::DatabaseError: 22001 (8152) [FreeTDS][SQL Server]String or binary data would be truncated.</code></pre>

At first I thought you had to use `nil` in fixtures, but in fact, it’s actually `NULL` that you want.