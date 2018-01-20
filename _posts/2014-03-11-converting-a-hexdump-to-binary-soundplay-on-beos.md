---
title: Converting a hexdump to binary, SoundPlay on BeOS
date: 2014-03-11T17:54:12+00:00
author: Ben
layout: post
permalink: /2014/03/11/converting-a-hexdump-to-binary-soundplay-on-beos/
openid_comments:
  - 'a:1:{i:0;i:51987;}'
categories:
  - Technology
tags:
  - beos
  - hexdump
  - mp3
  - ogg
  - soundplay
  - vorbis
  - xxd
---
I recently inherited an old machine with a 150 MHz AMD K6-2 CPU and 32 MB RAM. That&#8217;s a _really_ meager machine, even for the time it was built (circa 1999).

I was planning to just donate it to Goodwill Reboot... but before I did, I wondered what I could possibly do with it. My first computer was a 133 MHz Pentium with maybe 32 or 64 MB of RAM, so there was a certain sentimentality for a machine like it. It had Windows 98 installed, which was interesting but only in passing. (I sold the install CD on Amazon for $20 surprisingly). Win98 was depressingly slow. I tried a semi-modern, lightweight Linux (a [2005 release of Damn Small Linux](http://www.damnsmalllinux.org/)), and it wasn&#8217;t much better.

As [I&#8217;ve mentioned before](http://www.benjaminoakes.com/tag/beos/), I was a fan of the BeOS back in the day. It had a great ability to squeeze an amazing amount of power out of meager hardware. Scot Hacker definitely nailed it when [he wrote](http://www.birdhouse.org/beos/refugee/) that &#8220;anyone who has spent time with BeOS is forever spoiled, their expectations for OS technology permanently affected.&#8221; (Although I mostly use Ubuntu now, I also landed on Mac OS X after BeOS like Scot. In comparison to BeOS, OSX is incredibly resource hungry, albeit providing plenty of charm.)

So I had to try BeOS on the machine too. It was surprisingly easy to get [the free version of BeOS R5](http://www.bebits.com/app/2680) installed. That was especially meaningful to me, since I&#8217;ve never gotten BeOS working in VirtualBox; apparently there are some rarely used features of the x86 architecture that BeOS depends on. After getting the OS installed, it really wasn&#8217;t much more work to get SoundPlay -- an MP3/Vorbis player -- up and running. It runs **incredibly** fast for 150MHz/32MB. I could play music and even write a little Ruby in Vim at the same time.

So for now, the box is reborn as a BeOS-powered jukebox down in the basement. An appropriate use, given the place that music and this particular OS have had in my life. Is it woefully outdated? Yes. But this was really more of a sentimental journey than anything, and it can actually do something useful.

I was pretty happy until I realized that SoundPlay would stop working in 30 days.

I figured it _must_ have been given away for free by this point. And my intuition was correct:

> I&#8217;m no longer accepting SoundPlay registrations, but you can download a free keyfile here. Copy to /boot/home/config/settings, then restart SoundPlay.

...but the keyfile mentioned on [SoundPlay&#8217;s website](http://marcone.home.xs4all.nl/soundplay.html) (currently down, but available on the [Wayback Machine](http://web.archive.org/web/20130609080641/http://marcone.home.xs4all.nl/soundplay.html)) wasn&#8217;t there.

I&#8217;d gotten this far, so I figured I&#8217;d see if I could find it elsewhere.

Within the first page of Google results, I found [someone who posted their keyfile](http://www.freelists.org/post/haiku/Keyfile-for-Soundplay,1) (which also gave a 404). Thankfully, a kind soul had the insight to post a [hexdump of that file](http://www.freelists.org/post/haiku/Keyfile-for-Soundplay,4).

So close, I could almost touch it! I did a little more research and found a command to reconstitute it as a binary file.

<pre><code class="bash"># xxd v1.10 was already installed on my Ubuntu 12.04 machine
xxd --revert keyfile.soundplay.hexdump keyfile.soundplay
</code></pre>

For whatever reason, I had to do a little adjustment by hand before I was able to run the command. Basically this:

<pre><code class="no-highlight">00000000  2b 9b 18 5f 0e 51 23 4e  c2 44 16 b8 aa 6c 7e e0  |+.._.Q#N.D...l~.|
</code></pre>

...became this:

<pre><code class="no-highlight">00000000: 2b9b 185f 0e51 234e c244 16b8 aa6c 7ee0
</code></pre>

(I&#8217;ve posted the reformatted file below.)

At the end of this adventure, I now have a simple jukebox built out of SoundPlay and BeOS R5. Since others were nice enough to share and get me to this point, I figured I should do the same.

So here you go, Internet:

  * [SoundPlay 4.9.3 (Intel)](http://media.benjaminoakes.com/SoundPlay/SoundPlay-4.9.3-x86.zip) (only tested on BeOS R5)
  * [keyfile.soundplay](http://media.benjaminoakes.com/SoundPlay/keyfile.soundplay) (goes in `/boot/home/config/settings`)
  * [keyfile.soundplay.hexdump](http://media.benjaminoakes.com/SoundPlay/keyfile.soundplay.hexdump) (reformatted hexdump)

(Note, I&#8217;m not claiming copyright; I&#8217;m just archiving what the author had already made available as shareware, and then freeware. Please [notify me](http://www.benjaminoakes.com/contact/) if you own this and would like it to be taken down.)

I know I&#8217;m not the only one who still has a soft spot for BeOS, so I&#8217;d be happy to know this helped someone else. (Please leave a comment!)

<blockquote class="twitter-tweet" lang="en">
  <p>
    Charming story of hardware revival and software nostalgia by <a href="https://twitter.com/benjaminoakes">@benjaminoakes</a>: <a href="http://t.co/iNrJYfOGmp">http://t.co/iNrJYfOGmp</a>
  </p>
  
  <p>
    &mdash; Dan Bernier (@danbernier) <a href="https://twitter.com/danbernier/statuses/443457796085145600">March 11, 2014</a>
  </p>
</blockquote>