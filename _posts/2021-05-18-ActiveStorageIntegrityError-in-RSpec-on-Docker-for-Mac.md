---
layout: post
title: "ActiveStorage::IntegrityError in RSpec on Docker for Mac"
category: "ruby"
date: 2021-05-18
---

> I was also able to work around it without changing source or spec code by mounting the `/tmp` directory (the destination of the file copied from a mounted directory) as a `tmpfs` upon container startup (could also be set through the `tmpfs` key in a docker-compose file):
> 
> `--mount type=tmpfs,destination=/tmp`

[Very specific set of circumstances leads to zero-byte (empty) file being created - Issue #1015 - docker/for-linux](https://github.com/docker/for-linux/issues/1015#issuecomment-839926235)

I saw `ActiveStorage::IntegrityError` on a Rails app running in Docker for Mac recently.  (Docker for Mac v3.3.3 if you're curious.)  This is a way of working around the issue in `docker-compose`, based on the above quote:

```
services:
  yourapp:
    tmpfs:
      - /tmp
```
