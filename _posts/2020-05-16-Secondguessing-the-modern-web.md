---
layout: post
title: "Second-guessing the modern web"
category: "web"
date: 2020-05-16
---

> But Im at the point where you look at where the field is and what the alternatives are  taking a second look at unloved, unpopular, uncool things like Django, Rails, Laravel  and think what the heck is happening. Were layering optimizations upon optimizations in order to get the SPA-like pattern to fit every use case, and Im not sure that it is, well, worth it.

Source: [Second-guessing the modern web - macwright.org](https://macwright.org/2020/05/10/spa-fatigue.html)

The more I work on an API that serves to Android, iOS, mobile web, and desktop web, the more I wonder about the topic of this article. We're often building every feature multiple times, once for each platform.  It's certainly not easy to get everyone on the same page when there are often 5 engineers working on a single feature.

I've not done a ton with GraphQL, but predictably, it isn't a silver bullet.  It's not clear to me (or anyone?) how to query using GQL and avoid N+1 queries in SQL, for example.  It's enough to make one yearn for when Rails just did its job with only browsers as clients, with some sprinkles of JavaScript for extra interactivity. You can still do that now with React or Vue, but it certainly isn't normal anymore... and maybe it should be?

I'm very curious how development practices will change with the shock to the economy from Covid-19. Will companies still rebuild every feature for each platform, or will something like PWAs make that obsolete because it would save money at the expense of a "truly native" app?
