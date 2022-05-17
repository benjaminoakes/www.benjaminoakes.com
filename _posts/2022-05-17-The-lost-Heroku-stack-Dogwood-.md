---
layout: post
title: "The lost Heroku stack: Dogwood "
category: ""
date: 2022-05-17
---

> In Heroku each "stack" is the substrate the dynos run on. It encompasses the AWS runtime, the HTTP router, the logging pipeline and a bunch of the other infrastructure like the slug builder and the deployment infrastructure. The three stacks Heroku has used are named after trees: Aspen, Bamboo and Cedar. Every Heroku app today runs on the Cedar stack, and compared to Bamboo it was a generational leap in capability. Cedar was what introduced buildpacks and support for any language under the sun. Prior stacks railroaded you into Ruby on Rails (Heroku used to be a web IDE for making Rails apps). However there were always plans to improve with another generational leap. This ended up being called the "Dogwood stack", but Dogwood never totally materialized because it was too ambitious for Heroku to handle post-acquisition. Parts of Dogwood's roadmap ended up being used in the implementation of Private Spaces, but as a whole I don't expect Dogwood to materialize in Heroku in the way we all had hoped.

Source: [Fly.io: the Reclaimer of Heroku's Magic - Xe](https://christine.website/blog/fly.io-heroku-replacement)

I've always wondered why the new stacks stopped.
