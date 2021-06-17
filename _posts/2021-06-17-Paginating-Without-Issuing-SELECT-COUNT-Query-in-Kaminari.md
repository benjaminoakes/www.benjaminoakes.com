---
layout: post
title: "Paginating Without Issuing SELECT COUNT Query in Kaminari"
category: "rails"
date: 2021-06-17
---

> Generally the paginator needs to know the total number of records to display the links, but sometimes we don't need the total number of records and just need the "previous page" and "next page" links. For such use case, Kaminari provides `without_count` mode that creates a paginatable collection without counting the number of all records. This may be helpful when you're dealing with a very large dataset because counting on a big table tends to become slow on RDBMS.

Source: [amatsuda/kaminari:  A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for Ruby webapps](https://github.com/amatsuda/kaminari)
