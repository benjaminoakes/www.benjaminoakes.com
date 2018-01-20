---
title: Smart Power Strips in OS X
date: 2008-08-18T19:40:14+00:00
author: Ben
layout: post
permalink: /2008/08/18/smart-power-strips-in-os-x/
categories:
  - Uncategorized
tags:
  - environmentalism
  - os x
---
I recently purchased a Philips Smart Surge Protector (SPP3225WA/17). It&#8217;s nice because it can detect when an attached device is turned off and then turn off any other devices attached. This is especially useful when used with a computer because most peripherals are unusable when the computer is off, so there’s no sense in leaving them on.

It&#8217;s a great idea in theory, but I had problems using it with my Mac mini (OS X Leopard 10.5.4). Specifically, I want to use the built-in power scheduling (see &#8220;Energy Saver&#8221; -> &#8220;Schedule...&#8221; in System Preferences) to have the Mac turn off everything so we don&#8217;t have to remember to do so at the end of the day. Everything worked fine using the normal &#8220;Shut Down&#8221; command, but I didn&#8217;t want to have to make sure no one was doing anything every night. I wanted to use something like &#8220;Sleep&#8221;, but unfortunately, once the Mac went to sleep, it would turn off the attached external hard drives which would, in turn, wake the Mac back up. (It would also complain about not being properly ejected.) The most the Mac would stay asleep would be a couple of seconds.

But I found a solution! According to some information I found, there&#8217;s a way to change from using the default &#8220;sleep&#8221; and use something closer to what Windows users may know as &#8220;hibernate&#8221;. (It exists normally in OS X, but is only triggered by low battery.) To force it to always &#8220;hibernate&#8221; when sleeping (which is fine in the case of the Mac mini), you can run the following command at the command line:

```bash
sudo pmset -a hibernatemode 1
```

To reset this back to normal, run:

```bash
sudo pmset -a hibernatemode 3
```

Using this hibernate mode, the Mac no longer turns itself back on when the power to the external hard drives goes off. You can then set the Mac to sleep on whatever schedule works for you in System Preferences and everything else should turn off around 15 seconds after it starts going to sleep. (You&#8217;ll have to give it a little bit because it has to write the contents of memory to disk, which takes time.)

However, one problem still remains: OS X will still complain about the disks being removed improperly. To get around this, I wrote a small shell script which ejects them 5 minutes before the scheduled sleep time. You&#8217;ll need to tailor it to your setup, of course.

```bash
#!/usr/bin/env bash
# ~/bin/eject_external_drives

if [ -d "/Volumes/Time Machine" ]
then
  diskutil eject "/Volumes/Time Machine"
fi

if [ -d "/Volumes/Storage" ]
then
  diskutil eject "/Volumes/Storage"
fi
```

My crontab for this task looks like so:

    55    11    *    *    *    /Users/ben/bin/eject_external_drives
    50    11    *    *    *    /Users/ben/bin/eject_external_drives

(It tries twice before midnight.)

I haven&#8217;t used this extensively yet, but it seem to be working well in testing so far. Let me know if it works for you!