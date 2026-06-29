---
layout: post
title: "How to Download Humble Vault Games on Linux and Mac (Without Windows)"
category: ""
date: 2026-06-29
---

tl;dr: Use [Slashbunny/humble-vault-downloader](https://github.com/Slashbunny/humble-vault-downloader)

I decided to subscribe to Humble Choice, part of [Humble Bundle](https://www.humblebundle.com/). Humble Bundle itself has a lot of interesting bundles (games and ebooks primarily) often around $10. You can also donate most of what you pay to charity. They've been around about 15 years and have donated close to $300,000,000, which is quite amazing!

Humble Choice isn't quite as charity-focused but they do have some great content. As a physical game collector, I've been disillusioned by the Nintendo Switch 2 and Game Key Cards. I don't see any exclusives on Switch 2 that are compelling. I'm sure that will change someday, but for now, I don't understand why people are buying the Switch 2 at the current prices (currently around $450). It will be interesting to see Steam (including the Steam Deck) versus traditional consoles play out. If things are going all digital, part of the value of consoles vs computer gaming is just lost.  Also, the fact that you can run Steam on almost anything is very interesting, especially when I realized my little $200 Chuwi MiniBook X (N100) with Ubuntu could run games I'm actually interested in. It's a great, light device that I often have with me. Add a controller, and it's actually pretty nice for light games!

However, the problem is Windows. I don't want to run Windows, and fortunately, Steam has done away with that need for gaming. Many companies do still assume you're running on Windows though, including Humble.

I tried for a long time to get the Humble Vault downloader running. Humble Vault is a DRM-free selection of mostly indie games for Windows, Mac, and Linux, but they only provide a Windows app to download it! What a strange thing given that it's an Electron app and should be able to run on Mac and Linux. I guess they just want to make it harder to download DRM-free games, even though customers have paid for them. In any case, the selection changes, so I wanted to download what content I could. I tried Lutris and Bottles. Neither would work despite all the configuration changes I tried. And then I came across a nice script that works, fortunately!

I proposed a change to [the Lutris page for Humble Vault](https://lutris.net/games/humble-games-collection/) to hopefully save someone else what I went through:

> It may not be easy to run this application. If you are unable to run Humble Games Collection to receive access to your Humble Vault (which requires a Humble Choice subscription), you may consider a terminal-based downloader.  One such downloader that is known to work is [https://github.com/Slashbunny/humble-vault-downloader](https://github.com/Slashbunny/humble-vault-downloader) which has a Docker container and only requires a cookie from your browser.

It works quite well! I wish it would show how much free space is needed though. So far, I've downloaded 11GB with no signs of slowing! Apparently it's idempotent too: you can just run the command each month when they change the selection and it will just download the new stuff. I hear it's mostly a static collection of games now, but still, it's something they include, so we might as well get what we are paying for.
