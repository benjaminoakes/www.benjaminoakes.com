---
layout: post
title: "Sumo Logic livetail CLI"
category: "unix"
date: 2019-07-10
---


> The Live Tail Command Line Interface (CLI) is a standalone application that allows you to start and use a Live Tail session from the command line, similar to `tail -f`. The output is directed to stdout - so you can pipe the output to commands (grep, awk etc)

Source: [SumoLogic/livetail-cli: Download the Sumo Logic Live Tail CLI tool.](https://github.com/SumoLogic/livetail-cli)

Example:

```
livetail '_sourceCategory=production/haystack*' | grep 'needle'
```

Exactly what I was hoping would exist.  I've put years into learning Unix text processing, so `grep` and `sed` are second nature.  Why relearn everything?
