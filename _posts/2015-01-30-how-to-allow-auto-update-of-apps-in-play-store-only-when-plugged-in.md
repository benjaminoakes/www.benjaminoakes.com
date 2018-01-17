---
id: 615
title: How to allow auto-update of apps in Play Store only when plugged in?
date: 2015-01-30T04:19:48+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=615
permalink: /2015/01/30/how-to-allow-auto-update-of-apps-in-play-store-only-when-plugged-in/
categories:
  - Android
tags:
  - Android
  - apps
  - autoupdating
  - wifi
---
[4.1 jelly bean -- How to allow auto-update of apps in Play Store only when plugged in? -- Android Enthusiasts Stack Exchange](http://android.stackexchange.com/questions/41648/how-to-allow-auto-update-of-apps-in-play-store-only-when-plugged-in).

My answer:

> The closest I&#8217;ve come is combining two settings. I do this on two devices, one running Android 4.4.4 (KitKat) and another running Android 5.0.2 (Lollipop).
> 
>   * System Settings → Wi-Fi → Advanced → Keep Wi-Fi on during sleep → Only when plugged in
>   * Play Store → Settings → Auto-update apps → Auto-update apps over Wi-Fi only
> 
> It seems to pick up updates at least a little more often when it&#8217;s plugged in. It&#8217;s not perfect, but it&#8217;s not a bad half-solution, and it doesn&#8217;t require Tasker or rooting.