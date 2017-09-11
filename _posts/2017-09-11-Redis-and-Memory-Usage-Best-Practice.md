---
layout: post
title:  "Redis and Memory Usage Best Practice"
date:   2017-09-11
---

> ### Background saving fails with a fork() error under Linux even if I have a lot of free RAM!
>
> Short answer: `echo 1 > /proc/sys/vm/overcommit_memory` :)
>
> And now the long one:
>
> Redis background saving schema relies on the copy-on-write semantic of fork in modern operating systems: Redis forks (creates a child process) that is an exact copy of the parent. The child process dumps the DB on disk and finally exits. In theory the child should use as much memory as the parent being a copy, but actually thanks to the copy-on-write semantic implemented by most modern operating systems the parent and child process will share the common memory pages. A page will be duplicated only when it changes in the child or in the parent. Since in theory all the pages may change while the child process is saving, Linux can't tell in advance how much memory the child will take, so if the `overcommit_memory` setting is set to zero fork will fail unless there is as much free RAM as required to really duplicate all the parent memory pages, with the result that if you have a Redis dataset of 3 GB and just 2 GB of free memory it will fail.
>
> Setting `overcommit_memory` to 1 tells Linux to relax and perform the fork in a more optimistic allocation fashion, and this is indeed what you want for Redis.
>
> A good source to understand how Linux Virtual Memory works and other alternatives for `overcommit_memory` and `overcommit_ratio` is this classic from Red Hat Magazine, "Understanding Virtual Memory". Beware, this article had 1 and 2 configuration values for `overcommit_memory` reversed: refer to the proc(5) man page for the right meaning of the available values.

Source: [FAQ – Redis](https://redis.io/topics/faq#background-saving-fails-with-a-fork-error-under-linux-even-if-i-have-a-lot-of-free-ram)

So 50% memory usage is bad unless you use `overcommit_memory`.  Good to know.
