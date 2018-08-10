---
layout: post
title: "Amazon Aurora Serverless, an Auto-Scaling Serverless Database Service"
category: "serverless"
date: 2018-08-10
---

> Aurora Serverless is an on-demand, auto-scaling configuration for Aurora (MySQL-compatible edition) where the database will automatically start-up, shut down, and scale up or down capacity based on your application's needs. Aurora Serverless enables you to run your database in the cloud without managing any database instances. It's a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads, because it automatically starts up, scales capacity to match your application's usage, and shuts down when not in use.
>
> Manually managing database capacity can take up valuable time and can lead to inefficient use of database resources. With Aurora Serverless, you simply create a database endpoint, optionally specify the desired database capacity range, and connect your applications. You pay on a per-second basis for the database capacity you use when the database is active, and migrate between standard and serverless configurations with a few clicks in the Amazon RDS Management Console.

Source: [Amazon Aurora  Auto-Scaling Serverless Database Service - AWS](https://aws.amazon.com/rds/aurora/serverless/)

$0.06 per "Aurora Compute Unit" per hour, but you pay prorated by the second...  This is a very interesting option for inexpensive database servers.
