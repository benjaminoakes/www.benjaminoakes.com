---
layout: post
title: "Flatpak Is Not the Future"
category: "computing"
date: 2021-11-29
---

> If you are a Linux distribution maintainer, please understand what all of these solutions are trying to accomplish. All your hard work in building your software repository, maintaining your libraries, testing countless system configurations, designing a consistent user experience they are trying to throw all of that away. Every single one of these runtime packaging mechanisms is trying to subvert the operating system, replacing as much as they can with their own. Why would you support this?

Source: [Flatpak Is Not the Future](https://ludocode.com/blog/flatpak-is-not-the-future)

The author makes some good points about application sizes, performance, and security, and I'm for stability (kind of?), but relying on ancient versions of libraries just because they're stable took me aback.

I don't think you should need hundreds of megabytes (or gigabytes) to run tiny apps on Linux, but there has to be some better middle ground.  Also, as a software developer, I'm not a *huge* fan of the idea of getting stuck with bad decisions in libraries just because they're stable... but then again that's basically what the web is.  Very stable, except for the brand new APIs, but definitely not perfect.  It works because it's so widespread.

Stability and newness are two things that will always be at odds, maybe.  The real problem is knowing when the new shiny thing is actually worth adopting over the old stable thing.
