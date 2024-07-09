---
layout: post
title: "No more boot loader: Please use the kernel instead"
category: ""
date: 2024-07-09
---

>We are working on a new scheme to replace the GRUB bootloader with a fast, secure, Linux-based, user-space solution: nmbl (for no more boot loader). Most people are familiar with GRUB, a powerful, flexible, fully-featured bootloader that is used on multiple architectures (x86_64, aarch64, ppc64le OpenFirmware). Although GRUB is quite versatile and capable, its features create complexity that is difficult to maintain, and that both duplicate and lag behind the Linux kernel while also creating numerous security holes. On the other hand, the Linux kernel, which has a large developer base, benefits from fast feature development, quick responses to vulnerabilities and greater overall scrutiny. We (Red Hat boot loader engineering) will present our solution to this problem, which is to use the Linux kernel as its own bootloader. Loaded by the EFI stub on UEFI, and packed into a unified kernel image (UKI), the kernel, initramfs, and kernel command line, contain everything they need to reach the final boot target. All necessary drivers, filesystem support, and networking are already built in and code duplication is avoided. 

Source: [No more boot loader: Please use the kernel instead :: DevConf.CZ :: pretalx](https://pretalx.com/devconf-cz-2024/talk/W3AVCT/)
