---
title: Maid v0.3.0 release!
date: 2013-04-05T04:13:07+00:00
author: Ben
layout: post
permalink: /2013/04/05/maid-v0-3-0-release/
categories:
  - GitHub
  - Linux
  - Mac OS X
  - Maid
  - Open Source
  - Programming
  - Ruby
  - Ubuntu
---
I released Maid v0.3.0 yesterday, after using [Maid v0.3.0 Beta 1](https://github.com/benjaminoakes/maid/issues/101) for over a week myself. It was also [downloaded 36 times](https://rubygems.org/gems/maid/versions/0.3.0.beta.1), without any known bugs reported by [beta test team](https://github.com/benjaminoakes/maid/issues/10).

From the change log:

  * Only allow &#8220;move&#8221; to move to existing directories. Renaming files
      
    can be accomplished with the new &#8220;rename&#8221; tool. This fixes a bug in
      
    overwrite warnings. (Closes: #87)

I did have to make [some expected changes from `move` to `rename`](https://github.com/benjaminoakes/maid-example/commit/2187c4e710993374695e1ba9e7e882160d8f444c), however, but the warning messages for that show the new usage pretty clearly:

```
skipping move because foo is not a directory (use 'mkdir' to create first, or use 'rename')
```

Otherwise, work is progressing on [the next version of Maid](https://github.com/benjaminoakes/maid/issues?milestone=6&state=open) also. Hopefully there will be another beta soon.

But in the meantime, Maid v0.3.0 has already been [downloaded 62 times](https://rubygems.org/gems/maid/versions/0.3.0). If you haven&#8217;t already given it a try, maybe Maid can help you with your spring cleaning... :)

Enjoy!