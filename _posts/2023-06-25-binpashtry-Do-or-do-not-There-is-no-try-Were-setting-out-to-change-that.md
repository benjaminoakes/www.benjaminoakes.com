---
layout: post
title: "binpash/try: \"Do, or do not. There is no try.\" We're setting out to change that."
category: ""
date: 2023-06-25
---

>try lets you run a command and inspect its effects before changing your live system. try uses Linux's namespaces (via unshare) and the overlayfs union filesystem.
>
>Please note that try is a prototype and not a full sandbox, and should not be used to execute commands that you don't already trust on your system, (i.e. devices in /dev are mounted in the sandbox, and network calls are all allowed.) Please do not attempt any commands that will remove everything in /dev or write zeros to your disks.

Source: [binpash/try: "Do, or do not. There is no try." We're setting out to change that.](https://github.com/binpash/try)

Very interesting!  This feels like something that should have always existed.
