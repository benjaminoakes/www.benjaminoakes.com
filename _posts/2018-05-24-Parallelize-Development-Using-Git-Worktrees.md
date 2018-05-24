---
layout: post
title: "Parallelize Development Using Git Worktrees"
categories: "git clone devtip protip maintenance"
date: 2018-05-24
---

> Recently, I was in a situation in which I really needed two separate copies of my Git repository. I was about to make a full clone of the repository, but I decided to see if Git had a better solution. And in fact, Git introduced [the worktree feature](https://git-scm.com/docs/git-worktree) not too long ago (as of version 2.5, released July 2015).
>
> A worktree gives you an extra working copy of your repository, and it's almost as easy as creating a new branch. 

Source: [Parallelize Development Using Git Worktrees](https://spin.atomicobject.com/2016/06/26/parallelize-development-git-worktrees/)

"Quickly Verify That the Project Works with a Clean Checkout" is a good reason, in particular.  I often find that many repos require more gitignored files or other setup than I ever remembered.


