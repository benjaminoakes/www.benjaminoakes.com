---
layout: post
title: "RegreSSHion: RCE in OpenSSH's server, on glibc-based Linux systems"
category: ""
date: 2024-07-02
---

> Successful exploitation has been demonstrated on 32-bit Linux/glibc systems with ASLR. Under lab conditions, the attack requires on average 6-8 hours of continuous connections up to the maximum the server will accept. Exploitation on 64-bit systems is believed to be possible but has not been demonstrated at this time. It's likely that these attacks will be improved upon.

Source: [RegreSSHion: RCE in OpenSSH's server, on glibc-based Linux systems - Hacker News](https://news.ycombinator.com/item?id=40843778)

As far as I can tell from the TXT file, this is closer to a theoretical vulnerability originally found in 2006 than one under active exploit.  Still, it should be fixed upstream and everyone should update. 

