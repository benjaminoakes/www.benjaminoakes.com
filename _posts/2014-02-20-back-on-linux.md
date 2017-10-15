---
id: 445
title: Back on Linux
date: 2014-02-20T18:26:11+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=445
permalink: /2014/02/20/back-on-linux/
categories:
  - Linux
tags:
  - debian
  - Linux
  - osx
---
[Back on Linux — dywypi.org](http://dywypi.org/2012/02/back-on-linux.html).

This is pretty much exactly how I feel about switching from OSX back to Linux. My guess is that a lot of developers have similar sentiments. In fact, I overbought RAM (8GB) because I was so used to running out on OSX. Although it&#8217;s hardly perfect, I&#8217;m pretty happy with Ubuntu on a day-to-day basis. 

Since Jyrki&#8217;s post is licensed under [a Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/) (see the footer of his site), I thought I&#8217;d archive it here for posterity. 

> # [Back on Linux](/2012/02/back-on-linux.html)
    
> 
> 
> <div class="head info">
>   by <a href="/about/">Jyrki Pulliainen</a> on 2012-02-11
> </div>
> 
> <div class="cf content">
>   <p>
>     About a month ago I moved to Stockholm, Sweden and started working at <a href="http://spotify.com">Spotify</a>. A month before starting I was asked about my preferred setup for working. Having used OS X for year as the primary operating system at work the choice was clear, I wanted to go back to Linux, in this case to Debian to be exact.
>   </p>
>   
>   <h2>
>     Working with Macbook Pro, a year in retrospective, the hardware
>   </h2>
>   
>   <p>
>     There&#8217;s one thing that really stands out of Apple&#8217;s laptops, the build quality. The aluminium unibody is manufactured with precision, there&#8217;s no air intakes in the bottom of the machine (this is really useful if you use a laptop in your lap) and the peripherals, like the touchpad, are top quality. I really miss those and keep on wondering why there&#8217;s no PC manufacturers that would have the same overall quality of the hardware.
>   </p>
>   
>   <p>
>     The choices Apple has made also have drawbacks: The mini-DisplayPort requires you to carry around a load of adapters, the amount of USB ports is pretty limited and due to the missing of proper air intake the laptop can get pretty hot, but that was really rare in my use.
>   </p>
>   
>   <p>
>     Operating system OS X excelled in the hardware drivers: when you have limited amount of hardware you need to support, building good drivers for it is much easier. Feature that I probably miss the most was the somewhat smart handling of external displays, along with the brilliant multitouch gestures of the touchpad.
>   </p>
>   
>   <h2>
>     &#8230;and the software
>   </h2>
>   
>   <p>
>     However, the operating system was in no way par with the hardware. Biggest grief was the memory usage. Judging from the interwebs, the most developers purchased 8 gigabytes of memory on their machines to start with. I had four. For web development, Python programming and such four is more than plenty. Except if you&#8217;re running OS X, apparently.
>   </p>
>   
>   <h3>
>     Completely failed memory management
>   </h3>
>   
>   <p>
>     OS X has a feature called <a href="http://support.apple.com/kb/HT1342">inactive memory</a>. This is memory that was recently used by an app you closed and can be quickly made to active memory if you resume to use that app. A nice concept, that fails miserably. OS X&#8217;s documentation says, that this memory <em>may</em> be freed at any moment. However in practice, it just keeps on<br /> accumulating until you run out of free memory. In this case a sane option for the OS would be freeing the inactive memory. Instead the OS X decides to <em>swap the inactive memory on the disk</em>. So when running out of free memory and having a 1,5 gigabytes of inactive memory left, your OS starts paging the <em>unused</em> inactive memory to disk instead of freeing it for applications to use. Not only this causes your computer to slow down, it also is counter-intuitive in the terms of the original idea of inactive memory: when it&#8217;s on disk, it definitely is not made<br /> active quickly.
>   </p>
>   
>   <p>
>     I managed to find out that this memory can be freed with combination of XCode&#8217;s <code>purge</code>-command and repairing <em>disk</em> permissions. First usually freed around 200MB of memory while latter freed almost every bit of inactive memory. Eventually this became a daily routine. When arriving to work the first thing was to hit repair disk permissions button and do something else than actually use the computer for the next five to ten minutes. Sigh.
>   </p>
>   
>   <h3>
>     Messed up software installation
>   </h3>
>   
>   <p>
>     There are at least four different ways of installing software on OS X. Download a DMG image, drag the icon from there to Applications folder, run an installer, install stuff from Mac App Store or compile it yourself. There seems to be no standard way how to do this properly. Of course, being a software dev, I ended up using the last alternative a lot.
>   </p>
>   
>   <p>
>     However, someone had come up with a solution for manual installing: a package distribution system that takes care of all requirements for you. There are multiple flavours of those, I ended up using <a href="http://mxcl.github.com/homebrew/">homebrew</a>.
>   </p>
>   
>   <p>
>     When you have pretty much unified hardware (32/64-bit Intel) with pretty limited number of operating system versions, one could think that distributing binaries would be the way to go. Apparently it is not. Using homebrew is like using Gentoo, except that it&#8217;s even more<br /> screwed up. There&#8217;s no central repository for sources, it tries to download everything from the projects sites using different methods. After that, it compiles <em>everything</em>. Want to install library X? Please wait, compiling and downloading tons of crap from the interwebs, might take tens of minutes of wall time.
>   </p>
>   
>   <p>
>     And of course this does not support installing Python, Ruby, Perl on any other software that has its own way of distributing software. And in case you mix up MacPorts and homebrew, you&#8217;re deeply screwed.
>   </p>
>   
>   <p>
>     And don&#8217;t even get me started with the closed ecosystem thing Apple and OS X are heading towards with rapid speed.
>   </p>
>   
>   <h2>
>     Why Debian?
>   </h2>
>   
>   <p>
>     I&#8217;m a long time <a href="http://ubuntu.com">Ubuntu</a> user, but this time I decided to go with <a href="http://debian.org">Debian</a>. Why? Mostly because our servers are Debian and because latest updates of Ubuntu have mostly focused on breaking the desktop environment. With Debian Squeeze I get the old and reliable Gnome 2.30 with the ability of pinning newer packages from either backports or from testing and unstable distributions.
>   </p>
>   
>   <p>
>     Most notably I get the ultimate software installation tool, <code>apt-get</code>. A tool that installs <em>binary</em> packages with their dependencies. A tool, that&#8217;s universally supported by Google et al., so I don&#8217;t even have any problems installing newest Chrome, for example.
>   </p>
>   
>   <p>
>     Linux in general brings other improvements with it, like working command line tools. GNU version of common tools like find and grep are much more powerful when compared to the BSD alternatives available on OS X.
>   </p>
>   
>   <h2>
>     Do I miss something?
>   </h2>
>   
>   <p>
>     Sure. Even though Linux in modern times mostly works out of the box, there&#8217;s still slight issues with external displays, for example I can&#8217;t set the 30&#8243; Dell monitor at work to be the only display without doing some <code>xrand</code> magic. I guess that&#8217;s really the only thing I&#8217;m missing from OS X, a sane and automatic way of handling external displays. I also miss the Macbook&#8217;s superior touchpad, the joystick of Lenovo is nothing in comparison.
>   </p>
>   
>   <p>
>     Would I consider switching back? No. I got working virtual desktops, package manager and properly working memory model now, currently using 3 gigabytes out of total eight, and it includes running four virtual machines 512 megs of memory each.
>   </p>
>   
>   <p>
>     So long OS X. You were a nice experiment and I miss some parts of you, however we definitely were not a match made in heaven.
>   </p></p>
> </div>