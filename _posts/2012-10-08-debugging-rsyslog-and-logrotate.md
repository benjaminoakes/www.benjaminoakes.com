---
id: 172
title: Debugging rsyslog and logrotate
date: 2012-10-08T17:19:02+00:00
author: Ben
excerpt: "<p>I've been getting my hands greasy with more involvement in Ubuntu server maintenance lately, so I thought I'd share some of my experiences with debugging <code>rsyslog</code> and <code>logrotate</code>.</p>"
layout: post
permalink: /2012/10/08/debugging-rsyslog-and-logrotate/
categories:
  - Debugging
  - Heroku
  - Linux
  - Programming
  - Rails
  - Technology
  - Ubuntu
tags:
  - logrotate
  - popular
  - rsyslog
---
**Takeaway:** Debugging `rsyslog` and `logrotate` is easier when using Vagrant and `logrotate`&#8216;s debug switch (`-d`).

I&#8217;ve been getting my hands greasy with more involvement in Ubuntu server maintenance lately, so I thought I&#8217;d share some of my experiences with debugging `rsyslog` and `logrotate`.

We&#8217;re using an EC2 instance running Ubuntu 12.04 (Precise Pangolin) to receive `syslog` packets from Heroku and elsewhere. They&#8217;re received with `rsyslog`, and we&#8217;re using `logrotate` to rotate and compress the log files. We&#8217;re being a little lazy right now and just letting everything go into `/var/log/syslog`. So far, that&#8217;s been a good choice as the machine only handles log aggregation. Most of the setup is similar to [what Heroku recommends](https://devcenter.heroku.com/articles/logging).

My first bump in the road was that which Ubuntu 12.04 doesn&#8217;t give `rsyslog` port 514 (the standard syslog port), unlike Ubuntu 10.04. This is because 514 requires root privileges. As a result, the port has to be above 1024, so I chose 1514 to make it easier to remember and know its purpose. It&#8217;s not completely clear why Ubuntu changed `rsyslog` to run under its own user (I would guess security reasons), but there is [a bug report which helped me figure this out](https://bugs.launchpad.net/ubuntu/+source/rsyslog/+bug/789174).

Following that I ran into an issue with getting `logrotate` to rotate the log files in the way we wanted. We decided that storing 30 days worth of logs, marking the rotation with the date, and compressing older logs would be best for our needs. It sounded easy enough to configure after looking at `man logrotate` and `/etc/logrotate.conf`. But it didn&#8217;t work! No matter what I tried, only 7 days of logs were retained, although compressing and adding a date extension worked fine.

It turned out to be a simple problem, but it&#8217;s more important to know how to debug these problems, I think. Below is what I did.

You probably don&#8217;t want to debug configuration problems directly on your production instance, or even on a staging instance. To develop the changes locally, I found that the easiest solution was to use [Vagrant](http://vagrantup.com/). They provide a `precise64` box which was perfect for my needs:

```bash
vagrant box add precise64 http://files.vagrantup.com/precise64.box
```

From there, you can test `logrotate` with the `-d` switch. Point it to your configuration file and then see what it says it will do:

```bash
logrotate -d /etc/logrotate.conf
```

The problem behavior was clearly visible in the output; `/var/log/syslog` was only being kept for 7 days. Changes to `/etc/logrotate.conf` did not make a difference for the rotation count (but I could change to doing `dateext`). Around that time, started poking around in `/etc/logrotate.d/`, where I found `/etc/logrotate.d/rsyslog`.

This is the original configuration for `/var/log/syslog`:

```
/var/log/syslog
{
        rotate 7
        daily
        missingok
        notifempty
        delaycompress
        compress
        postrotate
                reload rsyslog >/dev/null 2>&1 || true
        endscript
}
```

After that point, it was simple to try my changes and retest using `logrotate` as above:

```
/var/log/syslog
{
        rotate 30
        daily
        # NOTE: `dateext` means you can rotate at **most** once a day.  Be cafeful setting it globally.
        dateext
        missingok
        notifempty
        delaycompress
        compress
        postrotate
                reload rsyslog >/dev/null 2>&1 || true
        endscript
}
```

The debug output then showed it would retain the logs for 30 days. Great! It was then a simple matter of installing the same configuration in production.

While the result is important, I think the bigger takeaway is a process I can use in the future. With Vagrant and `logrotate -d /path/to/conf` in hand, future configuration changes are easier to develop, test, and deploy.