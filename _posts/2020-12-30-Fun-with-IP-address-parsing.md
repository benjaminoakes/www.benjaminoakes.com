---
layout: post
title: "Fun with IP address parsing"
category: "web"
date: 2020-12-30
---

> This is the same IP address: 3232271615. You get that by interpreting the 4 bytes of the IP address as a big-endian unsigned 32-bit integer, and print that. This leads to a classic parlor trick: if you try to visit http://3232271615 , Chrome will load http://192.168.140.255.
>
> Okay, but thats sort-of sensible, right? An IPv4 address is 4 bytes, so printing it as a single number is a bit human-unfriendly, but broadly plausible, right?

Source: [Fun with IP address parsing - blog.dave.tf](https://blog.dave.tf/post/ip-addr-parsing/)

I never knew you could do this
