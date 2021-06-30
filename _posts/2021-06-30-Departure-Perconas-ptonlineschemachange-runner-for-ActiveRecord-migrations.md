---
layout: post
title: "Departure: Percona's pt-online-schema-change runner for ActiveRecord migrations"
category: "rails"
date: 2021-06-30
---

> Departure is an **ActiveRecord connection adapter** that allows running **MySQL online and non-blocking DDL** through `ActiveRecord::Migration` without needing to use a different DSL other than Rails' migrations DSL.

Source: [departurerb/departure: Percona's pt-online-schema-change runner for ActiveRecord migrations.](https://github.com/departurerb/departure)

Basically, Departure is another take on the problem that SoundCloud's [LHM](https://github.com/soundcloud/lhm) solves.  Aside: apparently [Shopify's fork of LHM](https://github.com/Shopify/lhm) is better maintained today, but I haven't used it directly.

Departure even has [support for the DSL from LHM](https://github.com/departurerb/departure#lhm-support).  Nice!
