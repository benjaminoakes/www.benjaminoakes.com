---
layout: post
title: "Bugs in Hello World"
category: "programming"
date: 2022-03-14
---

> Linux has this fun device file called "/dev/full", which is like its more famous cousin "/dev/null", but when you write to "/dev/full", instead of throwing away the data, it fails. It acts like a file on a filesystem that has just run out of space:
>
> [...]
>
> This is a great little tool for testing that programs handle I/O errors correctly. It's inconvenient to create actual filesystems with no space left, or disks that actually fail, but it's really easy to ask a program to write its output to "/dev/full" and see what happens.

Source: [Bugs in Hello World - sunfishcode's blog](https://blog.sunfishcode.online/bugs-in-hello-world/)

Very interesting.  I'd never seen `/dev/full` before.
