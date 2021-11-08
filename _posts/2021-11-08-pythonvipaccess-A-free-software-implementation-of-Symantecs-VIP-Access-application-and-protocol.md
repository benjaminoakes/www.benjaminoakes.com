---
layout: post
title: "python-vipaccess: A free software implementation of Symantec's VIP Access application and protocol"
category: "tech"
date: 2021-11-08
---

> A free software implementation of Symantec's VIP Access application and protocol
>
> [...]
>
> As @cyrozap discovered in reverse-engineering the VIP Access protocol (original blog post), Symantec VIP Access actually uses a completely open standard called Time-based One-time Password Algorithm for generating the 6-digit codes that it outputs. The only non-standard part is the provisioning protocol used to create a new token.

Source: [dlenski/python-vipaccess: A free software implementation of Symantec's VIP Access application and protocol](https://github.com/dlenski/python-vipaccess)

Sad to know it's completely usable in Authy and other TOTP authenticators except for the provisioning part.
