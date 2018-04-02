---
layout: post
title: "rr: lightweight recording and deterministic debugging"
date: 2018-04-02
---

> rr aspires to be your primary C/C++ debugging tool for Linux, replacing -- well, enhancing -- gdb. You record a failure once, then debug the recording, deterministically, as many times as you want. The same execution is replayed every time.
>
> rr also provides efficient reverse execution under gdb. Set breakpoints and data watchpoints and quickly reverse-execute to where they were hit.
>
> [...]
> 
> Supports recording and replay of all kinds of applications: Firefox, Chrome, QEMU, LibreOffice, Go programs, ... 

Source: [rr: lightweight recording & deterministic debugging](http://rr-project.org/)

Very interesting in concept.  I'd love to have `rr` wrappers for Ruby, Node.js, etc.
