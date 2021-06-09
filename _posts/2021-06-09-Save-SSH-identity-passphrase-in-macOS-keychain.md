---
layout: post
title: "Save SSH identity passphrase in macOS keychain"
category: "mac"
date: 2021-06-09
---

```
     -K      When adding identities, each passphrase will also be stored in the user's keychain.  When removing identi-
             ties with -d, each passphrase will be removed from it.
```

Source: `man ssh-add` on macOS

Handy to know!  Usage: `ssh-add -K` (no arguments).


