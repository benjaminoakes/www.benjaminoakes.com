---
layout: post
title: "Legacy Games is closing: How to download your games on Linux before 2027-02-28"
category: ""
date: 2026-10-15
---

[Legacy Games](https://legacygames.com/) is shutting down on 2027-02-28 ([FAQ](https://legacygames.com/legacy-games-closure-faq-everything-you-need-to-know/)). I never bought anything from them, but like many people, I got some of their content for free when I was briefly an Amazon Prime subscriber.

For anyone on Linux, I can confirm that [the Lutris installer for the Legacy Games Launcher](https://lutris.net/games/legacy-games/) works. It took a long time to install though. (Tested on Ubuntu 24.04.)

I haven't tried [the `app-state.json` trick](https://www.reddit.com/r/GameDealsMeta/comments/1x3zhhj/comment/pglyelf/) because I'm copying them to an external drive. I didn't want to bother with figuring that out in Wine. If you do want to pursue that, here it is for posterity:

> I experimented with it, and it looks like you can change the location that the installer downloads to by editing `%APPDATA%\legacy-games-launcher\app-state.json` to change the value for `"gameDownloadPath"` under `"settings"`. The default is the temp folder, but you can change it to wherever you want, and it will download to that new location. Notably, while the download step uses this value, the installation step hardcodes the temp directory, so changing this value will prevent the game from installing. If your goal is to simply backup the installer EXEs, this will allow you to both download the installers to an easier-to-access location and skip the installation step. 

However, the "copy before it deletes" approach works just fine if you don't have a ton of these.

On Ubuntu, the installers live in `/home/{{username}}/Games/legacy-games/drive_c/users/{{username}}/AppData/Local/Temp` until they're deleted after installation. Just copy them before the install finishes, and you're set. I've tried reinstalling from these files and they work normally in Wine.

I hope this helps! If it does, I'd love to hear about it.

