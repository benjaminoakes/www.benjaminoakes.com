---
layout: post
title: "entr(1):  Run arbitrary commands when files change "
category: ""
date: 2024-02-09
---

> Run arbitrary commands when files change 

Source: [entr(1)](https://eradman.com/entrproject/)

[Example](https://apple.stackexchange.com/questions/40705/monitor-a-folder-for-changes-and-run-a-command-when-a-change-is-detected):

```sh
ls my_project/*.html | entr echo "file changed"
```
