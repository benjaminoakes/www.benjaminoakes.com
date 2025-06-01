---
layout: post
title: "Stop syncing everything"
category: ""
date: 2025-06-01
---

>Partial replication sounds easy--just sync the data your app needs, right? But choosing an approach is tricky: logical replication precisely tracks every change, complicating strong consistency, while physical replication avoids that complexity but requires syncing every change, even discarded ones. What if your app could combine the simplicity of physical replication with the efficiency of logical replication? That's the key idea behind Graft, the open-source transactional storage engine I'm launching today. It's designed specifically for lazy, partial replication with strong consistency, horizontal scalability, and object storage durability.

Source: [Stop syncing everything](https://sqlsync.dev/posts/stop-syncing-everything/)
