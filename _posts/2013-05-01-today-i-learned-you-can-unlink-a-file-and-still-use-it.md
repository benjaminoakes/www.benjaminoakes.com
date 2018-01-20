---
title: 'Today I Learned: You can unlink a file and still use it'
date: 2013-05-01T15:37:54+00:00
author: Ben
layout: post
permalink: /2013/05/01/today-i-learned-you-can-unlink-a-file-and-still-use-it/
categories:
  - API
  - Programming
  - Ruby
  - Today I Learned
---
> #### Unlink after creation
> 
> On POSIX systems, it’s possible to unlink a file right after creating it, and before closing it. This removes the filesystem entry without closing the file handle, so it ensures that only the processes that already had the file handle open can access the file’s contents. It’s strongly recommended that you do this if you do not want any other processes to be able to read from or write to the Tempfile, and you do not need to know the Tempfile’s filename either.

From [Ruby&#8217;s Tempfile documentation](http://www.ruby-doc.org/stdlib-1.9.3/libdoc/tempfile/rdoc/Tempfile.html). In Ruby/POSIX parlance, `unlink` means `delete`, so this was surprising to me.