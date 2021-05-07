---
layout: post
title: "Faktory, a language-agnostic version of Sidekiq"
category: "distributed"
date: 2021-05-07
---

> Language-agnostic persistent background job server
>
> [...]
>
> At a high level, Faktory is a work server. It is the repository for background jobs within your application. Jobs have a type and a set of arguments and are placed into queues for workers to fetch and execute.
>
> You can use this server to distribute jobs to one or hundreds of machines. Jobs can be executed with any language by clients using the Faktory API to fetch a job from a queue.

Source: [contribsys/faktory: Language-agnostic persistent background job server](https://github.com/contribsys/faktory)

By [Mike Perham](https://github.com/mperham), the creator of [Sidekiq](https://github.com/mperham/sidekiq).  Basically, Sidekiq that isn't tied to Ruby.
