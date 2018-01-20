---
id: 126
title: 'New open source projects: Maid and TabCarousel'
date: 2011-06-21T18:38:01+00:00
author: Ben
layout: post
permalink: /2011/06/21/new-open-source-projects-maid-and-tabcarousel/
categories:
  - GitHub
  - Linux
  - Mac OS X
  - Open Source
  - Projects
  - Ruby
  - Web
---
I&#8217;ve been hard at work taking some code I had originally written for myself and packaging it up as two open source projects. I&#8217;ve been very happy about the amount of interest I&#8217;ve received in both. I encourage you to take a look and see if what I&#8217;ve released would be useful to you. Feedback (and contributions) are welcome!

## [Maid](http://rubygems.org/gems/maid)

([Install](http://rubygems.org/gems/maid), [Source Code](http://github.com/benjaminoakes/maid))

Be lazy! Let Maid clean up after you, based on rules you define.

Maid keeps files from sitting around too long, untouched. Many of the downloads and other files you collect can easily be categorized and handled appropriately by rules you define. Let the maid in your computer take care of the easy stuff, so you can spend more of your time on what matters.

Think of it like the email filters you might already have, but for files. Worried about things happening that you don’t expect? Maid doesn’t overwrite files and actions are logged so you can tell what happened.

Maid is inspired by the Mac OS X shareware program [Hazel](http://www.noodlesoft.com/hazel.php). This tool was created on Mac OS X 10.6, but should be generally portable to other systems. (Some of the more advanced features such as downloaded_from require OS X, however.)

Your rules are defined in Ruby, so easy rules are easy and difficult rules are possible.

## [TabCarousel](http://chrome.google.com/webstore/detail/ddldimidiliclngjipajmjjiakhbcohn)

([Install](http://chrome.google.com/webstore/detail/ddldimidiliclngjipajmjjiakhbcohn), [Source Code](http://github.com/benjaminoakes/TabCarousel))

A Chrome extension to help you keep tabs on info you want to monitor. It&#8217;s great for cycling through tabs on an external display, like a TV.

TabCarousel is simple: open tabs you want to monitor throughout the day, then click the toolbar icon. To stop, click the icon again.

By default, TabCarousel will flip through your tabs every 15 s, reloading them every 5 min. It&#8217;s great on a unused display or TV. Put Chrome in full-screen mode (F11, or cmd-shift-f on the Mac) and let it go.

If you want to change how often TabCarousel flips through your tabs, right click on the toolbar icon and choose &#8220;Options&#8221;.

**Example Uses**

On a HDTV that has a computer attached, open the NewRelic overview (and Background Tasks, etc.) for each app you&#8217;d like to monitor. Set NewRelic to kiosk mode for each page, then hit the &#8220;Tab Carousel&#8221; toolbar button.

The [TabCarousel wiki](https://github.com/benjaminoakes/TabCarousel/wiki) has more.