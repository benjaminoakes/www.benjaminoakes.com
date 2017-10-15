---
id: 1037
title: Docker, Locales, and Ruby
date: 2017-03-23T17:02:54+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=1037
permalink: /2017/03/23/docker-locales-and-ruby/
categories:
  - Ruby
tags:
  - ascii
  - docker
  - locale
  - locale-gen
  - Ruby
  - utf8
---
    # Set the locale
    RUN locale-gen en_US.UTF-8  
    ENV LANG en_US.UTF-8  
    ENV LANGUAGE en_US:en  
    ENV LC_ALL en_US.UTF-8
    

Source: [Docker and Locales](http://jaredmarkell.com/docker-and-locales/).

Fixes `invalid byte sequence in US-ASCII` in Ruby when using Docker.  Found via [this prmd issue](https://github.com/interagent/prmd/issues/237).