---
layout: post
title: "Designing robust and predictable APIs with idempotency"
category: "web"
date: 2021-07-06
---

> Networks are unreliable. Weve all experienced trouble connecting to Wi-Fi, or had a phone call drop on us abruptly.
>
> [...]
>
> To overcome this sort of inherently unreliable environment, its important to design APIs and clients that will be robust in the event of failure, and will predictably bring a complex integration to a consistent state despite them. Lets take a look at a few ways to do that.

Source: [Designing robust and predictable APIs with idempotency](https://stripe.com/blog/idempotency)

Basically, they add an `Idempotency-Key` header to allow repeatable requests.
