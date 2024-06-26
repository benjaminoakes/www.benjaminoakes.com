---
layout: post
title: "How to Spot a Fake MicroSD Card and Avoid Being Scammed"
category: ""
date: 2024-06-26
---

> Something else caught my eye: microSD cards. MicroSD cards with massive volumes sold exceptionally cheap. As it turns out, the vast majority of these cards are fake. They work in your device but show a fake volume. Sellers are scamming buyers. 

Source: [How to Spot a Fake MicroSD Card and Avoid Being Scammed](https://www.makeuseof.com/tag/how-to-spot-fake-microsd-card/)

I got bit by this and probably should have known better.  There are some very convincing fakes out there too.

The main thing to do is request a refund.

After that, they're actually real microSD cards, but they just don't have the labeled/reported capacity.  You can discover the real capacity and then use them in many cases.  There are some popular Windows apps to discover the real capacity, but given that I'm on Ubuntu Linux, I went with F3 (Fight Flash Fraud).  The command line `f3` seems to be something you can `apt install` and then have `f3probe` and friends.  However, `f3-qt` (the graphical one) has to be built from source.  It takes a while if you have a large "capacity" device too.

- [AltraMayor/f3: F3](https://github.com/AltraMayor/f3?tab=readme-ov-file#installation)
- [zwpwjwtz/f3-qt: Qt front end for Fight Flash Fraud](https://github.com/zwpwjwtz/f3-qt)


In any case, I hope this helps anyone else in the same scenario.  Best of luck!
