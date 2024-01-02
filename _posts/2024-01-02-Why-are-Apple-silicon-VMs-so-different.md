---
layout: post
title: "Why are Apple silicon VMs so different?"
date: 2024-01-02
---

> Although the first version of macOS to run on Apple silicon, Big Sur,
didn't support the lightweight virtualisation that was to follow in
Monterey, it brought what Apple termed its Virtualization Extensions, an
implementation of Arm's AArch64 virtualization. Every single hardware
device in an Apple silicon chip is different from its equivalent in Intel
Macs. The reward for Apple is flexibility in the future of macOS. Running
older versions of macOS in a VM enables users to run Intel-only apps long
after Rosetta 2 support is dropped from the current macOS, and for newer
Apple silicon Macs to run software that's incompatible with their minimum
version of macOS. Using either Linux or macOS, developers can distribute
Docker-like lightweight VM packages, something already done by Cirrus Labs'
Tart.

Source: [Why are Apple silicon VMs so different?](
https://eclecticlight.co/2023/12/29/why-are-apple-silicon-vms-so-different/)

This would be a huge change over their typical policy of dropping support
quickly.  I wonder how that would be spun from a security perspective.

