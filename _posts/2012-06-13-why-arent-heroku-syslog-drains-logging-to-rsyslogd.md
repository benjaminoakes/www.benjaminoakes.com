---
id: 150
title: 'Why aren&#8217;t Heroku syslog drains logging to rsyslogd?'
date: 2012-06-13T15:13:51+00:00
author: Ben
layout: post
permalink: /2012/06/13/why-arent-heroku-syslog-drains-logging-to-rsyslogd/
categories:
  - Heroku
  - Linux
  - Rails
  - Ruby
  - Technology
---
From [a recent question I wrote](http://serverfault.com/questions/397724/why-arent-heroku-syslog-drains-logging-to-rsyslogd) on ServerFault:

> ## Question
> 
> I&#8217;m having a problem using syslog drains as described in <a href="https://devcenter.heroku.com/articles/logging" rel="nofollow">https://devcenter.heroku.com/articles/logging</a>.
> 
> To summarize, I have an Ubuntu 10.04 instance on EC2 that is running `rsyslogd`. I&#8217;ve also set up the security groups as they describe, and added a syslog drain using a command like `heroku drains:add syslog://host1.example.com:514`.
> 
> I can send messages from the Heroku console to my `rsyslogd` instance via `nc`. I see them appear in the log file, so I know there isn&#8217;t a firewall/security group issue.  However, Heroku does not seem to be forwarding log messages to the server that `heroku drains` lists. I would expect to see HTTP requests, Rails messages, etc.
> 
> Is there something else I can try to do to figure this out? I&#8217;m new to `rsyslogd`, so I could easily be missing something.
> 
> ## Answer
> 
> I found out what I had done wrong, with the help of Heroku Support. (Thanks guys!)
> 
> I had used the wrong security group name (`default` instead of `logplex`).
> 
> These are the appropriate values for the fields in the AWS Security Group web interface:
> 
>   * Create a new rule: `Custom TCP rule`
>   * Port range: `514`
>   * Source: `098166147350/logplex` (NOTE: **not** `default`)