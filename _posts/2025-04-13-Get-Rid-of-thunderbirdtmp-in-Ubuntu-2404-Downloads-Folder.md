---
layout: post
title: "Get Rid of thunderbird.tmp in Ubuntu 24.04 Downloads Folder"
category: ""
date: 2025-04-13
---

> `echo "thunderbird.tmp" > ~/Downloads/.hidden`

Source: [Get Rid of thunderbird.tmp in Ubuntu 24.04 Downloads Folder](https://ubuntuhandbook.org/index.php/2024/03/thunderbird-tmp-ubuntu/)

It's because of the Snap version of Thunderbird.  I don't know why they don't just use `~/Downloads/.thunderbird.tmp` but they don't.
