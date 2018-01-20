---
id: 286
title: Major unpatched OS X bugs
date: 2013-08-30T03:35:42+00:00
author: Ben
layout: post
permalink: /2013/08/30/major-unpatched-os-x-bugs/
categories:
  - Mac OS X
  - Technology
---
Both bugs sound pretty serious.

[Unpatched Mac bug gives attackers “super user” status by going back in time](http://arstechnica.com/security/2013/08/unpatched-mac-bug-gives-attackers-super-user-status-by-going-back-in-time/).

This vulnerability can allow an attacker root access to OS X.  Time related bugs like this `sudo` bug are really difficult to notice, but at least it&#8217;s fairly difficult to trigger.

[Rendering bug crashes OS X, iOS apps with string of Arabic characters (Updated)](http://arstechnica.com/apple/2013/08/rendering-bug-crashes-os-x-and-ios-apps-with-string-of-arabic-characters/).

This bug, on the other hand, is likely to cause all sorts of issues as it becomes more well known.  Any application that uses Apple&#8217;s CoreText  will crash if it sees a certain string of Arabic characters.  There aren&#8217;t currently any security implications, and I admittedly thought of sending the text to Mac-using friends.  However, if your browser crashes every time you view a certain site or text message, this is why.  For some reason, this bug reminds me of the [ping of death](http://en.wikipedia.org/wiki/Ping_of_death) (e.g., in early versions of Windows).