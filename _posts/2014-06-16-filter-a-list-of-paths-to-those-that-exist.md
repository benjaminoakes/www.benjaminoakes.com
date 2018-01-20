---
title: Filter a list of paths to those that exist
date: 2014-06-16T17:37:34+00:00
author: Ben
layout: post
permalink: /2014/06/16/filter-a-list-of-paths-to-those-that-exist/
categories:
  - Shell
tags:
  - bash
  - files
  - list
  - ls
  - one-liner
  - shell
---
If you have a file containing paths, but only some of them exist, you can filter them down to only the ones that exist using this command:

```bash
ls -1 $(cat list-of-files.txt) > list-of-files.txt
```

For example, this is useful for comparing branches in `git`. You could run all the specs that changed between two branches, ignoring the spec files that were removed.
