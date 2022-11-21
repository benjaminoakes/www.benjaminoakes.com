---
layout: post
title: "Scaling Mastodon in the Face of an Exodus"
category: "rails "
date: 2022-11-21
---

>TL;DR: Mastodons Sidekiq deferred execution jobs are the limiting factor for scaling federated traffic in a single-server or small cluster deployment. Sidekiq performance scales poorly under a single process model, and can be limited by database performance in a deployment of the default Dockerized configuration.

Source: [Scaling Mastodon in the Face of an Exodus](https://nora.codes/post/scaling-mastodon-in-the-face-of-an-exodus/)
