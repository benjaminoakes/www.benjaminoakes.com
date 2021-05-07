---
layout: post
title: "Que: A Ruby job queue built on top of PostgreSQL"
category: "ruby"
date: 2021-05-07
---

> Que's primary goal is reliability. You should be able to leave your application running indefinitely without worrying about jobs being lost due to a lack of transactional support, or left in limbo due to a crashing process. Que does everything it can to ensure that jobs you queue are performed exactly once (though the occasional repetition of a job can be impossible to avoid - see the docs on how to write a reliable job).
>
> Que's secondary goal is performance. The worker process is multithreaded, so that a single process can run many jobs simultaneously.

Source: [que-rb/que: A Ruby job queue that uses PostgreSQL's advisory locks for speed and reliability.](https://github.com/que-rb/que)

Related:

- [statianzo/que-web: A web interface for the Que queue](https://github.com/statianzo/que-web)
- [hlascelles/que-scheduler: A lightweight cron scheduler for the async job worker Que](https://github.com/hlascelles/que-scheduler)
- [airhorns/que-locks: Exclusive job execution for que-rb/que](https://github.com/airhorns/que-locks)

Not as advanced as [Sidekiq](https://github.com/mperham/sidekiq), but good to know about.
