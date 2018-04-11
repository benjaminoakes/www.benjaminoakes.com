---
layout: post
title: "Headline Features in Rails 5.2"
date: 2018-04-11
---

[Rails 5.2 shipped on April 9th](http://weblog.rubyonrails.org/2018/4/9/Rails-5-2-0-final/), just before [RailsConf 2018](http://railsconf.com/) in Pittsburgh on the 17th.

Here are the headline changes:

* [Active Storage](https://github.com/rails/rails/blob/d3893ec38ec61282c2598b01a298124356d6b35a/activestorage/README.md) - includes providers like S3 and its ilk, creating variants, and async metadata extraction
* [Redis Cache Store](https://github.com/rails/rails/pull/31134) - supports distributed Redis for sharding with changes that can drastically improve cache lifetime
* [HTTP/2 Early Hints](https://github.com/rails/rails/pull/30744) - faster loading for related assets like JS/CSS
* [CSP](https://github.com/rails/rails/pull/31162) - a new Content Security Policy DSL (Domain Specific Language) to configure Rails apps
* [Credentials](https://github.com/rails/rails/pull/30067) - Encrypted credentials for your app, like AWS access keys and other secrets.  They can be checked into revision control without needing to maintain a large number of environment variables.
* [bootsnap](https://github.com/Shopify/bootsnap) - This gem is now included by default and reduces application boot times by over 50%.
