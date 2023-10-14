---
layout: post
title: "Bare-metal Rust in Android"
category: ""
date: 2023-10-14
---

>Last year we wrote about how moving native code in Android from C++ to Rust has resulted in fewer security vulnerabilities. Most of the components we mentioned then were system services in userspace (running under Linux), but these are not the only components typically written in memory-unsafe languages. Many security-critical components of an Android system run in a "bare-metal" environment, outside of the Linux kernel, and these are historically written in C. As part of our efforts to harden firmware on Android devices, we are increasingly using Rust in these bare-metal environments too.


Source: [Google Online Security Blog: Bare-metal Rust in Android](https://security.googleblog.com/2023/10/bare-metal-rust-in-android.html)

Rust is everywhere
