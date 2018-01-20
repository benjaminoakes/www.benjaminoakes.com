---
title: database configuration does not specify adapter
date: 2012-10-26T22:36:32+00:00
author: Ben
layout: post
permalink: /2012/10/26/database-configuration-does-not-specify-adapter/
categories:
  - Debugging
  - GitHub
  - MySQL
  - Open Source
  - PostgreSQL
  - Rails
  - Ruby
  - Ubuntu
tags:
  - popular
---
From [an answer I wrote for StackOverflow](http://stackoverflow.com/questions/413659/database-configuration-does-not-specify-adapter/13095318#13095318):

> Another possible cause:
>
> In Rails 3.2.x, <code>establish_connection</code> has a default argument set from the environment:
>
> From <a href="https://github.com/rails/rails/blob/v3.2.8/activerecord/lib/active_record/connection_adapters/abstract/connection_specification.rb#L127" rel="nofollow">connection_specification.rb</a>:
>   
> ```ruby
> def self.establish_connection(spec = ENV["DATABASE_URL"])
>   resolver = ConnectionSpecification::Resolver.new spec, configurations
>   spec = resolver.spec
> ```
>
> The way <code>ConnectionSpecification::Resolver</code> works depends on <code>ENV['DATABASE_URL']</code> giving a <code>nil</code> if not set. (Normally, it would be something like <code>postgres://...</code>).
>
> So, if you happen to have misconfigured <code>DATABASE_URL</code> such that <code>ENV['DATABASE_URL'] == ''</code>, that will give you <code>database configuration does not specify adapter</code>.
