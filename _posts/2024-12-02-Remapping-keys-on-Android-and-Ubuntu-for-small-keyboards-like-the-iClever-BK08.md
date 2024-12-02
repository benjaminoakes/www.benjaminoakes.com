---
layout: post
title: "Remapping keys on Android and Ubuntu for small keyboards like the iClever BK08"
category: ""
date: 2024-12-02
---

I recently purchased an [iClever Foldable Bluetooth Keyboard and Touchpad, model BK08](https://www.amazon.com/Bluetooth-iClever-Pocket-Sized-Tri-Folding-Smartphones/dp/B01MTVC775).

There's a lot to like, but the buttons have definitely been crammed into a small space.  When folded, it's about the same size and thickness as my phone.  The letters have decent placement, but the keys like quote and question mark are going to take some getting used to.  Not only that, but the Escape key requires a  "Fn" button press.  That's not great for someone who uses Vim a lot!

So what can we do?  Well, Vim users have been remapping Caps Lock to Escape for quite some time.  I'm sure I can on Ubuntu, but is that even possible on Android?

It turns out it's possible to install a keymap that only maps a single key.  There are [prebuilt APKs](https://github.com/ris58h/exkeymo-web?tab=readme-ov-file#prebuilt-apks) to provide this keymap over at the [exkeymo-web](https://github.com/ris58h/exkeymo-web) project.  If that goes away, here's an archived copy of the Unlicensed [ExKeyMo-caps2esc.zip](http://www.benjaminoakes.com/media/2024/12/02/ExKeyMo-caps2esc.zip).  It sounds like there's a lot you can do if you want to dig in, but for now, I'm fine just the one key.  One word of warning, though: it took me a long time to find the setting on my Samsung phone.  It's under Physical Keyboard, then the keyboard model (e.g. iClever BK08 KB), and then tap "English (US)" (or your layout) and choose ExKeyMo Layout.  To see this, you also have to be connected to the keyboard you're remapping at the time.

On Ubuntu, it's much simpler: install Gnome Tweak Tool (`sudo apt install gnome-tweak-tool`) and adjust the keyboard settings per [this writeup](https://askubuntu.com/questions/33774/how-do-i-remap-the-caps-lock-and-ctrl-keys).  This is what I did:

> - Open tweak-tool and click on the Keyboard & Mouse section in the left menu
> - Click on the Additional Layout Options button on the left.
> - Under Caps Lock behavior select Caps Lock is also a Ctrl.

