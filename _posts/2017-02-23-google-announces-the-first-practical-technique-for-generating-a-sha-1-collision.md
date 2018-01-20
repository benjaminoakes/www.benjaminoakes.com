---
title: Google announces the first practical technique for generating a SHA-1 collision
date: 2017-02-23T16:39:49+00:00
author: Ben
layout: post
permalink: /2017/02/23/google-announces-the-first-practical-technique-for-generating-a-sha-1-collision/
categories:
  - Security
tags:
  - git
  - security
  - sha1
---
This is big news.

> We hope that our practical attack against SHA-1 will finally convince the industry that it is urgent to move to safer alternatives such as SHA-256.

Source: [Announcing the first SHA1 collision -- Google Online Security Blog](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html)

The technology community still uses SHA-1 for many things.  One of the most concerning implications of this team&#8217;s technique is that it implies attacks against Git, which uses SHA-1 for every commit.  Imagine if you had a tag (a SHA-1 sum) that referred to two different sets of changes: a benign changeset on your machine and a malicious changeset on GitHub.  Then you deploy that tag and the malicious code runs instead of the code you expected.

As far as I know, such an attack on Git hasn&#8217;t been demonstrated yet, but in theory, I think you _could_ replace a SHA-1 commit as I described.  I bet someone will demonstrate that someday.  (Think of padding files with bogus comments until you get the checksum you want.)  It would be difficult (though not impossible) to switch Git to SHA-256, but I don&#8217;t know of any efforts to do that -- though Git 2.11 is starting to acknowledge that [abbreviated SHA-1 checksums do collide in practice](https://github.com/blog/2288-git-2-11-has-been-released).

Will such an attack happen today or tomorrow?  Probably not; it takes a **huge** amount of resources right now.  However, computation is cheaper than ever; I bet attackers will start to use services like Travis CI for computations like this, like I&#8217;ve heard is starting to be done with Bitcoin mining in pull requests on open source projects.

The best mitigation I&#8217;m currently aware of is cryptographically signing your commits, and this may be a catalyst for that to become standard practice.