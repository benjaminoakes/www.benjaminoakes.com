---
layout: post
title: "How to enable auto-correct for Git commands"
category: "programming"
date: 2021-11-19
---

> Did you know that if you mistype a Git command you can automatically run the suggested fix? Ive been using Git for many years now and only just come across this feature today. To enable it you need to assign a value to the config setting `help.autocorrect`.

Source: [How to enable auto-correct for Git commands - Andy Carter](https://andy-carter.com/blog/auto-correct-git-commands)

Just learned this today too.  This sounds great.

```diff
+[help]
+  autoCorrect = immediate
```
