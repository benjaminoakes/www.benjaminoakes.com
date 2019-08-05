---
layout: post
title: "How do I use git over HTTPS?"
category: "git"
date: 2019-08-05
---

Using git over HTTPS (instead of SSH) can sometimes be more likely to work on a locked down internet connection, such as on an airplane.

```
$ git remote add origin_https https://github.com/benjaminoakes/www.benjaminoakes.com.git
$ git remote -v
origin  git@github.com:benjaminoakes/www.benjaminoakes.com.git (fetch)
origin  git@github.com:benjaminoakes/www.benjaminoakes.com.git (push)
origin_https    https://github.com/benjaminoakes/www.benjaminoakes.com.git (fetch)
origin_https    https://github.com/benjaminoakes/www.benjaminoakes.com.git (push)
$ git pull origin_https master
```

You'll need a token for pulling if it's a private repo.  See [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) at GitHub Help.  You can also [cache your GitHub password](https://help.github.com/articles/caching-your-github-password-in-git/).
