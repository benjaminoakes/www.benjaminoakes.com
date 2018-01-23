---
layout: post
title:  "How to fix committing with the wrong name and email configured in Git"
date:   2018-01-22
categories:
  - Technology
tags:
  - git
---

> ### I committed with the wrong name and email configured
>
> If it's a single commit, amend it
>
> ```sh
> $ git commit --amend --no-edit --author "New Authorname <authoremail@mydomain.com>"
> ```
>
> An alternative is to correctly configure your author settings in `git config --global author.(name\|email)` and then use
>
> ```sh
> $ git commit --amend --reset-author --no-edit
> ```
>
> If you need to change all of history, see the man page for `git filter-branch`.

Source: [Flight rules for Git](https://github.com/k88hudson/git-flight-rules/blob/master/README.md#i-committed-with-the-wrong-name-and-email-configured) (CC BY-SA 4.0 License)

Lots of good tips here.
