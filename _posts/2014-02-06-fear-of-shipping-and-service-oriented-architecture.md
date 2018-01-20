---
id: 435
title: Fear of Shipping and Service-Oriented Architecture
date: 2014-02-06T17:43:24+00:00
author: Ben
layout: post
permalink: /2014/02/06/fear-of-shipping-and-service-oriented-architecture/
openid_comments:
  - 'a:2:{i:0;i:4987;i:1;i:4988;}'
categories:
  - Programming
tags:
  - api
  - soa
  - tests
  - travis
---
This passage from [The Travis CI Blog: How to Get Over the Fear of Shipping](http://blog.travis-ci.com/2014-01-31-how-to-over-the-fear-of-shipping/) stood out to me:

> ### Complex dependencies
> 
> Over the last two years, we split up Travis CI into lots of smaller apps. While this was great help to scale out the platform, there was an effect we initially didn&#8217;t foresee.
> 
> Most of the apps depend on one large library containing all code, it&#8217;s called travis-core.
> 
> Whenever something in that repository changes, we ideally need to deploy all our apps to production to make sure the change doesn&#8217;t impact any of them.
> 
> This **big, single dependency is an impediment to us shipping code, and it&#8217;s a common problem**.
> 
> Do your projects have a common dependency, a library of shared code?
> 
> We&#8217;re slowly breaking this part up, pulling the relevant code into all of our single apps rather than share a big bundle amongst all of them. While this may cause some duplication, it allows us to ship faster in return and with more confidence.
> 
> The duplication is outweighed by every app only knowing about our data model what it needs to. We can reduce database models to the information relevant to each app, slowly replacing direct database access with API access, an architecture where every app knows as little as possible about the others and about the overall data model.

I&#8217;ve seen this anti-pattern happen first hand. Building a set of SOA apps really makes SOLID design principles (especially &#8220;**s**ingle purpose&#8221;) very salient. (Think of each app as a class in normal object oriented programming.) If one app needs to know too much about another app (or worse, it needs to share access to a database!), then that app probably isn&#8217;t focused enough.

This can be easily observed in the shared library code. If your shared library (e.g. `travis-core` above) has too much churn and too many deploys just so the business logic is consistent across multiple clients of the shared library, that&#8217;s a sign that some reorganization needs to happen. Like the Travis developers mention, this can easily lead to concerns when deploying. Know how it feels to have to update Rails in multiple apps when there&#8217;s a security fix? Imagine if you had to update an internally-maintained gem every time you deployed.

When I&#8217;ve seen SOA done well, there&#8217;s a well-defined API that any clients must use, and nothing else. If you try to skimp on a well-defined API, SOA will likely be more trouble than it&#8217;s worth.