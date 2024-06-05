---
layout: post
title: "A Brief Look at the Nintendo 3DS Cartridge Protocol"
date: 2024-06-05
---

> The cartridge ID2 determines the key used later in the protocol. At the
3DS factory, the keyX is written into the boot ROM, the AES key derivation
constant is made part of the AES hardware, the SNOW 2.0 and RC4 key
constants are made part of the cartridge controller hardware. The cartridge
must either have a full copy of the AES hardware and the keyX/keyY key
derivation algorithm to use the initial data to decrypt the title key or an
unencrypted copy of the title key.

Source: [A Brief Look at the 3DS Cartridge Protocol](
https://blog.winter-software.com/2024/06/02/ctr-cart-protocol)

So much detail!

