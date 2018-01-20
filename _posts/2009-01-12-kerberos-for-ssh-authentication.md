---
title: Kerberos for SSH authentication
date: 2009-01-12T11:02:08+00:00
author: Ben
layout: post
permalink: /2009/01/12/kerberos-for-ssh-authentication/
categories:
  - Mac OS X
tags:
  - kerberos
  - os x
  - ssh
---
I had a problem using Kerberos for SSH authentication on a MacBook Pro using Mac OS X 10.5.5.

**Edit:** Here&#8217;s [my original description of the problem](http://hintsforums.macworld.com/showthread.php?t=97664) on the Mac OS X Hints forums.

> I can&#8217;t get Kerberos to work for my user on my MacBook Pro (MacBookPro1,1), OS X Leopard 10.5.5.
> 
> What I know so far:
> 
> 1) It works correctly on my machine if I log in as a new user
  
> 2) I can get Kerberos tickets using both the GUI and kinit (i.e. they show up in klist) using my user
  
> 3) For some reason, when I make ssh verbose, I have:
> 
>     debug3: preferred publickey,keyboard-interactive,password
> 
> ...as my user, but as a different user (which works) I have:
> 
>     debug3: preferred gssapi-keyex,gssapi-with-mic,publickey,keyboard-interactive,password
> 
> gssapi should be Kerberos, so my user is just skipping my Kerberos tickets.
> 
> 4) My /etc/ssh_config file looks fine. All other configuration that I can find isn&#8217;t work
  
> 5) ssh keys don&#8217;t work either
> 
> Any help would be appreciated -- having to type in passwords with every bzr command isn&#8217;t fun!

After lots of trial and error, I knew:

  * I could get Kerberos tickets using both the GUI and <kbd>kinit</kbd> (i.e. they show up in <kbd>klist</kbd>) using my user
  * It used to work just fine
  * It worked correctly on my machine if I log in as a newly created user
  * For some reason, when I made <kbd>ssh</kbd> verbose, I had:

```
debug3: publickey,keyboard-interactive,password
```

...as my user, but as a different user (which worked) I had:

```
debug3: preferred gssapi-keyex,gssapi-with-mic,publickey,keyboard-interactive,password
```

(<kbd>gssapi</kbd> should be Kerberos)

  * <kbd>ssh</kbd> keys didn&#8217;t work either
  * My <kbd>/etc/ssh_config</kbd> file and other configuration looks fine

It turned out that MacPorts was to blame. Running <kbd>which ssh</kbd> in my account gave:

```
/opt/local/bin/ssh
```

On the other had, a newly created account would have:

```
/usr/bin/ssh
```

The fix is to change <kbd>$PATH</kbd>, of course. However, I&#8217;m not sure why some MacPorts package would have installed <kbd>ssh</kbd> as a dependancy.