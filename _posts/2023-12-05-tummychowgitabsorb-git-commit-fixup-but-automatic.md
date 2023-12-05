---
layout: post
title: "tummychow/git-absorb: git commit --fixup, but automatic"
category: ""
date: 2023-12-05
---

>You have a feature branch with a few commits. Your teammate reviewed the branch and pointed out a few bugs. You have fixes for the bugs, but you don't want to shove them all into an opaque commit that says `fixes`, because you believe in atomic commits. Instead of manually finding commit SHAs for `git commit --fixup`, or running a manual interactive rebase, do this:
>
>```
>git add $FILES_YOU_FIXED
>git absorb --and-rebase
>```
>
>`git absorb` will automatically identify which commits are safe to modify, and which staged changes belong to each of those commits. It will then >write `fixup!` commits for each of those changes.

Source: [tummychow/git-absorb: git commit --fixup, but automatic](https://github.com/tummychow/git-absorb)
