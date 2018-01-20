---
title: Convert bzr to git
date: 2015-01-27T03:51:03+00:00
author: Ben
layout: post
permalink: /2015/01/27/convert-bzr-to-git/
categories:
  - Open Source
tags:
  - bzr
  - convert
  - git
---
[Convert bzr to git - AstroFloyd's blog](https://astrofloyd.wordpress.com/2012/09/06/convert-bzr-to-git/).

I found a couple `bzr` repositories on my computer recently that I decided to convert to `git`. I found this nice writeup on how to convert.

On Ubuntu:

<pre><code class="sh">sudo apt-get install git bzr bzr-fastimport
</code></pre>

Then:

<pre><code class="sh">cp -pr repo-dir ${repo}_backup
cd ${repo}
git init
bzr fast-export --plain . - git fast-import
git co -f master
rm -rf .bzr/
</code></pre>