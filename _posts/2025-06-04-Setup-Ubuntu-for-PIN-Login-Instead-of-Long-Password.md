---
layout: post
title: "Setup Ubuntu for PIN Login Instead of Long Password"
category: ""
date: 2025-06-04
---

> Use your editor of choice with superuser privileges to edit the `/ect/pam.d/gdm-password` file to add `auth    sufficient      pam_pwdfile.so  pwdfile=/etc/custompinfile` to the top of the file, similar to the following: [...]

Source: [Setup Ubuntu for PIN login](https://gist.github.com/dmcbane/3ce77630e5070dc87ce777fc71c1ea72)

I'm not sure why this isn't available in settings, but it should be.  I'm under the impression that the normal password is still required for `sudo` and other priveledged actions.
