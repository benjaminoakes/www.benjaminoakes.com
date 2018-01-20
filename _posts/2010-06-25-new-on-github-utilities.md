---
title: 'New on GitHub: utilities'
date: 2010-06-25T12:08:16+00:00
author: Ben
layout: post
permalink: /2010/06/25/new-on-github-utilities/
categories:
  - Linux
  - Mac OS X
  - Ruby
  - Technology
tags:
  - code
  - github
  - Ruby
  - scripting
---
I spent some time over the last few weeks pulling together lots of command line tools that I&#8217;ve written over the last few years. I&#8217;ve [shared them](http://github.com/benjaminoakes/utilities) on GitHub.

Some fill in gaps that I wish *nix systems would have by default (such as `prune` vs `uniq` or `reverse` vs `rev`). Others just script things that I do commonly or are just tedious to do (such as `backups2git`, `github-init`, `timestamp`, `latest-migration-path`, and `std-timestamps`). Some are just there for fun (such as `is-computer-on`). Most of them are written in Ruby, but some are plain old Bash scripts. Lots of the Ruby scripts make heavy use of `ARGF`, which is **awesome** for writting shell scripts if you&#8217;ve never used it.

I also spent some time documenting (and remembering) how they worked. (Most of it was just shuffling comments around.) Almost every command has a `--help` option that prints usage information and a short synopsis now. I hope you find them useful!

[See them on GitHub](http://github.com/benjaminoakes/utilities)