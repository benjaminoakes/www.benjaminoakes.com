---
layout: post
title: "PostgreSQL reconsiders its process-based model"
category: ""
date: 2023-06-20
---

>In the fast-moving open-source world, programs can come and go quickly; a tool that has many users today can easily be eclipsed by something better next week. Even in this environment, though, some programs endure for a long time. As an example, consider the PostgreSQL database system, which traces its history back to 1986. Making fundamental changes to a large code base with that much history is never an easy task. As fundamental changes go, moving PostgreSQL away from its process-oriented model is not a small one, but it is one that the project is considering seriously.

Why?

>I think we're starting to hit quite a few limits related to the process model, particularly on bigger machines. The overhead of cross-process context switches is inherently higher than switching between threads in the same process - and my suspicion is that that overhead will continue to increase. Once you have a significant number of connections we end up spending a *lot* of time in TLB misses, and that's inherent to the process model, because you can't share the TLB across processes.

Source: [PostgreSQL reconsiders its process-based model [LWN.net]](https://lwn.net/SubscriberLink/934940/3abb2d4086680b78/)
