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

After that, they're actually real microSD cards, but they just don't have the labeled/reported capacity.  You can discover the real capacity and then use them in many cases.  There are some popular Windows apps to discover the real capacity, but given that I'm on Ubuntu Linux, I went with F3 (Fight Flash Fraud).  The command line `f3` seems to be something you can `apt install` and then have `f3probe` and friends.  However, `f3-qt` (the graphical one) has to be built from source.  It takes a long time if you have a large "capacity" device too.  There's a trick though...  See near the end of this article.

- [AltraMayor/f3: F3](https://github.com/AltraMayor/f3?tab=readme-ov-file#installation)
- [zwpwjwtz/f3-qt: Qt front end for Fight Flash Fraud](https://github.com/zwpwjwtz/f3-qt)

![F3 Qt after finishing](https://www.benjaminoakes.com/images/2024-06-26-f3-qt.png)

[Here's a build](https://www.benjaminoakes.com/assets/f3-qt) for `f3-qt` for amd64 Ubuntu Linux.  I built this on Ubuntu 22.04, but it might work on other versions.  It's not hard to build ([instructions](https://github.com/zwpwjwtz/f3-qt/blob/master/INSTALL)), but if you're unfamiliar, this download may help you.

(Aside: I'm a software developer, but not a C++ developer.  I thought I'd take [a quick try at improving this app](https://github.com/zwpwjwtz/f3-qt/pull/21).)

After determining the actual capacity, use a program like GNOME Disks to delete the large partition and then make a single small partition of the actual capacity.  After partitioning, you can confirm that it will work correctly with F3 if you would like.  It'll go a lot faster with a smaller partition.  In fact, you can use this to your advantage.  If you have a number of fake microSD cards from the same seller, there's a good chance that they're all the same actual capacity.  In my case, they were all 8GB.  Rather than wait for F3 to scan some very large fake capacities, I made a 10 GB partition and then scanned that.  It always came back at ~80%.  It's important to go just over the expected size in case it actually is larger.  Then I would make a new partition at 8GB and rescan one last time.  This approach goes much faster than the alternative.

What to do with 8GB microSD cards that might fail?  Well, I stored a subset of my offline music collection for playback on devices I don't use much.  It's okay if that data gets ruined because I have many copies of it.  You can examine your life and possessions to find a similar situation.

I hope this helps anyone else in the same scenario.  Best of luck!
