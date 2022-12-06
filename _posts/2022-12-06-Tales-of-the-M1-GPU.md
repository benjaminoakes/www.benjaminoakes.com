---
layout: post
title: "Tales of the M1 GPU"
category: "rust"
date: 2022-12-06
---

> Since this was going to be the first Linux Rust GPU kernel driver, I had a lot of work ahead! Not only did I have to write the driver itself, but I also had to write the Rust abstractions for the Linux DRM graphics subsystem. While Rust can directly call into C functions, doing that doesnt have any of Rusts safety guarantees. So in order to use C code safely from Rust, first you have to write wrappers that give you a safe Rust-like API. I ended up writing almost 1500 lines of code just for the abstractions, and coming up with a good and safe design took a lot of thinking and rewriting!

Source: [Tales of the M1 GPU](https://asahilinux.org/2022/11/tales-of-the-m1-gpu/)

Rust is everywhere
