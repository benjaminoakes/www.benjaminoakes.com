---
layout: post
title: "Transform JSON with gron (like jq but easier to grep)"
date: 2018-04-02
---

> gron transforms JSON into discrete assignments to make it easier to `grep` for what you want and see the absolute 'path' to it.
It eases the exploration of APIs that return large blobs of JSON but have terrible documentation.
>
> ```
> $ gron "https://api.github.com/repos/tomnomnom/gron/commits?per_page=1" | fgrep "commit.author"
> json[0].commit.author = {};
> json[0].commit.author.date = "2016-07-02T10:51:21Z";
> json[0].commit.author.email = "mail@tomnomnom.com";
> json[0].commit.author.name = "Tom Hudson";
> ```

Source: [tomnomnom/gron](https://github.com/tomnomnom/gron)

Nice.  I like `jq` but I _do_ find myself having to look in its documentation more than I'd like.  I know UNIX tools, so let me take advantage of that knowledge.  :)
