---
title: How do I embed images inside a GitHub wiki (gollum) repository?
date: 2012-04-06T11:00:43+00:00
author: Ben
layout: post
permalink: /2012/04/06/how-do-i-embed-images-inside-a-github-wiki-gollum-repository/
categories:
  - Debugging
  - GitHub
  - Web
---
After pushing images into the wiki repository (clone, add images, push), you can use relative paths like so:

<pre><code class="no-highlight">[[foo.jpg]]</code></pre>

For more info, see the [demo wiki&#8217;s page on images](https://github.com/mojombo/gollum-demo/blob/master/Mordor/Eye-Of-Sauron.md).

**Update (2012-05-02):** This is part of [my answer on StackOverflow](http://stackoverflow.com/questions/10045517/embedding-images-inside-a-github-wiki-gollum-repository/10414862#10414862).