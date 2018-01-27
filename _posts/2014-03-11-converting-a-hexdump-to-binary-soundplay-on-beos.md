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

```bash
# xxd v1.10 was already installed on my Ubuntu 12.04 machine
xxd --revert keyfile.soundplay.hexdump keyfile.soundplay
```

For whatever reason, I had to do a little adjustment by hand before I was able to run the command. Basically this:

```
00000000  2b 9b 18 5f 0e 51 23 4e  c2 44 16 b8 aa 6c 7e e0  |+.._.Q#N.D...l~.|
```

...became this:

```
00000000: 2b9b 185f 0e51 234e c244 16b8 aa6c 7ee0
```

(I&#8217;ve posted the reformatted file below.)

At the end of this adventure, I now have a simple jukebox built out of SoundPlay and BeOS R5. Since others were nice enough to share and get me to this point, I figured I should do the same.

So here you go, Internet:

  * [SoundPlay 4.9.3 (Intel)](/media/2014/03/11/SoundPlay/SoundPlay-4.9.3-x86.zip) (only tested on BeOS R5)
  * [keyfile.soundplay](/media/2014/03/11/SoundPlay/keyfile.soundplay) (goes in `/boot/home/config/settings`)
  * [keyfile.soundplay.hexdump](/media/2014/03/11/SoundPlay/keyfile.soundplay.hexdump) (reformatted hexdump)

(Note, I&#8217;m not claiming copyright; I&#8217;m just archiving what the author had already made available as shareware, and then freeware. Please [notify me](http://www.benjaminoakes.com/contact/) if you own this and would like it to be taken down.)

I know I&#8217;m not the only one who still has a soft spot for BeOS, so I&#8217;d be happy to know this helped someone else. (Please leave a comment!)

**Update (2018-01-26):** I'm changing to a new web host and realized I should probably drop the entire hexdump into this post, as it was nice that someone else did the same back in 2013.

<p>
<details>
<summary>Reveal keyfile.soundplay.hexdump</summary>
<pre>00000000: 2b9b 185f 0e51 234e c244 16b8 aa6c 7ee0
00000010: 92cd c30d c699 bceb 574f d9e4 b678 4a0d
00000020: 1640 32eb 03ad e7b1 2b75 6e79 53bd f741
00000030: 1b05 7f29 d427 40fa fc8e e022 24f2 b817
00000040: 6033 5e40 7229 436d 23d1 9c2e 9802 c496
00000050: ed37 2ae8 fee0 1341 6366 8f88 fa3c cad5
00000060: 30e2 6476 1d57 ca8c 7b61 df69 830e 689a
00000070: de6e 5082 fd93 d679 7fc1 9b3c 2052 54a6
00000080: e83a 50a3 4e15 0f09 2476 182a ccba ad5f
00000090: a9c1 ed27 7118 cb35 2f39 d37d b8a7 01db
000000a0: c53f c994 ee4d c791 ebd5 4f5d c4b6 9cd7
000000b0: 61fb e700 b234 86a8 1a5c ee75 6f79 8456
000000c0: f8ea 8c1b 057f 4923 4d48 3ad1 2b95 f0a2
000000d0: 2cf6 9888 61bb 2544 7274 4365 67f1 49a5
000000e0: 2fb9 53fd 372a ecfe e010 04e6 88fa 3cce
000000f0: 30ea 6473 1d47 217b 9aa0 b2b4 8346 ad67
00000100: 210b 6ed4 8204 d63d 77c1 9985 ff52 5486
00000110: c83a 744e 150f 09b3 5d93 c1bb a41f e9c3
00000120: 4468 5a1c cb8e 102f 3944 16b8 a701 6c7a
00000130: 4092 94ee 487a bc4e 304f 5dd3 9dd7 29fb
00000140: 1ee5 4f69 3482 2da8 1a54 ae50 6f69 8456
00000150: f8ca acbe a07f 0923 4d07 bad5 fc8e f187
00000160: d933 f688 8a4c 5e40 9f28 74c6 e827 e1cb
00000170: b5af 9953 fc38 6aec 5b45 bf49 678d 47fa
00000180: 348e 30e2 d9e4 7336 d8ca a07b 65df 6993
00000190: 2d67 31dc 6ed0 8244 d678 6a41 2c9f 85ff
000001a0: 885c a6cd 8741 ab15 7402 a4b2 5597 e1bb
000001b0: b5c0 1fad c3ed 68da 5cae 10d2 39d3 7d97
000001c0: aa00 647e 6092 84e3 e608 7abc ea46 55b0
000001d0: 62e4 3658 4e01 0c1e ed5f e936 8628 e7b1
000001e0: 2b75 6e79 53bd f741 1b05 7bd2 d422 4507
000001f0: d129 8ef0 a224 f698 8a4c 5e25 9f29 436d
00000200: 275a 9c2e 9042 c496 382a ecfe e0bf 1249
00000210: 638d 4711 6bd5 cfd9 7336 d8ca a17b 65df
00000220: 6983 ad28 9adc 6ed0 eff9 93d6 786a 2c3e
00000230: 85ff 89a3 cd87 517c 0e70 22a4 7618 0acc
00000240: bba5 c0f2 f446 ed68 a771 cb35 2f39 d316
00000250: 7db7 aa6c 7e60 9294 e60d c77a bceb 554f
00000260: 59f3 9d58 4a0c 1e00 3234 0386 a81a 5c0b
00000270: ee50 0284 56f8 eaac bea0 d2d4 2648 bafc
00000280: 8ef0 a299 33dd 1761 3b5e 4072 2943 c66d
00000290: 275a f19c 2e90 42c4 53fd 372a ecfe 45bf
000002a0: 4963 668d 4711 6bd5 cfd9 731d 57a1 7b9e
000002b0: 80b2 b483 0628 9adc 6ed0 8204 933d 77c1
000002c0: 9b85 ff89 a3cd 8751 7c0e 150f 22a4 7618
000002d0: 970a e1cc bba5 1ff2 a9c3 eda7 71cb 352f
000002e0: 39d3 7db7 01db c53f c9e3 0dc7 7abc 4eb0
000002f0: 6259 f39d d74a 0c1e 0032 3403 2de7 b15c
00000300: ee50 0279 8456 f8ea 411b 05a0 d2d4 2648
00000310: bad1 2b95 f0a2 2433 dd17 613b 259f 2943
00000320: 6de8 5a9c 2e90 42c4 9638 2aec fee0 1214
00000330: 6688 fa3c ce30 e264 731d 57a1 8c9e 65df
00000340: 6983 0628 9adc 8b6e d082 04d6 7877 c19b
00000350: 3e20 5254 a6c8 3a7c 0e70 22a4 b35d 180a
00000360: ccde c0f2 f446 68da 1ccb ae35 2f39 d37d
00000370: b701 6c7e 603f 9294 e608 7abc 4eb0 4f62
00000380: e4b6 584a 21fb e500 5fe9 032d a81a 5cee
00000390: 506f 7984 56f8 eaac bea0 d2d4 2648 07d1
000003a0: fc2b 958f a224 f698 8a4c 5e40 7274 c6e8
000003b0: 27f1 4bb5 afb9 53fd 3781 5b45 bf49 638d
000003c0: 4711 6bd5 cfd9 7336 d8ca 8c9e 80b2 6983
000003d0: ad67 31dc 6ed0 8204 d678 6a2c 9b85 ff89
000003e0: a3cd 873a 7c0e 7022 19b3 5d97 e1bb a51f
000003f0: a9c3 4668 da1c ae10 c244 16b8 aa01 dbc5
</pre>
</details>
</p>

#### Reactions

<blockquote class="twitter-tweet" lang="en">
  <p>
    Charming story of hardware revival and software nostalgia by <a href="https://twitter.com/benjaminoakes">@benjaminoakes</a>: <a href="http://t.co/iNrJYfOGmp">http://t.co/iNrJYfOGmp</a>
  </p>
  
  <p>
    &mdash; Dan Bernier (@danbernier) <a href="https://twitter.com/danbernier/statuses/443457796085145600">March 11, 2014</a>
  </p>
</blockquote>
