---
layout: post
title:  "Dwarf Fortress starting during apt-get upgrade"
date:   2017-08-18
---

Question:

> When I run apt-get upgrade on my Ubuntu 17.04 machine, sometimes it starts Dwarf Fortress by itself.
>
> It has happened already at least two times, so it was probably not just some sort of one time thing. Also, the execution of the apt-get upgrade seemed to be paused until I manually quit the Dwarf Fortress, so it most probably wasn't caused by something else running in that time.

Answer:

> Dwarf Fortress's executable is named `df`, which is also the name of a system tool for displaying disk space usage of your filesystems, creating a collision. By making it so that when you type `df`, Dwarf Fortress starts, you've shadowed the system tool, so when a script wants to - let's say - check if you have enough free space for unpacking an archive, instead of invoking `df` - the system tool - it'll start Dwarf Fortress instead. And after you quit Dwarf Fortress, the poor little script will be very confused as to why it wasn't given the disk usage information it asked for.
>
> Anyway, thanks for the laugh, this has to be among the funniest problems I've ever seen voiced on StackExchange. :)

Source: [Dwarf Fortress starting during apt-get upgrade - Ask Ubuntu](https://askubuntu.com/questions/938606/dwarf-fortress-starting-during-apt-get-upgrade)

That brought a smile to my face.  :)  I think whoever develops Dwarf Fortress **really** needs a different executable name, though.
