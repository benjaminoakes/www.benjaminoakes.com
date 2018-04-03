---
layout: post
title: "Join lines at the Unix shell using paste"
date: 2018-04-03
---

> ```
> NAME
>      paste -- merge corresponding or subsequent lines of files
> 
> SYNOPSIS
>      paste [-s] [-d list] file ...
> 
> DESCRIPTION
>      The paste utility concatenates the corresponding lines of the given input
>      files, replacing all but the last file's newline characters with a single
>      tab character, and writes the resulting lines to standard output.  If
>      end-of-file is reached on an input file while other input files still
>      contain data, the file is treated as if it were an endless source of
>      empty lines.
> ```

Source: `man paste` on macOS

Imagine `l.txt` and `r.txt` are lists of IDs you want compare and to use in a SQL `WHERE in (4,5,6)` clause:

```
$ cat l.txt
1
2
3
4
5
6
$ cat r.txt
1
2
3
$ paste -sd ',' <(diff l.txt r.txt | grep '<' | sed 's/< //')
4,5,6
```
