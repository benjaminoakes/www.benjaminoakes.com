---
layout: post
title: "How to upgrade indirect dependencies with Yarn"
category: "javascript"
date: 2020-08-17
---

> Given explicit dependency `jsonwebtoken` has resolved implicit dependency `jws^3.0.0` to vulnerable`jws=3.1.4`: and you need it to instead resolve to patched `3.1.5`:
> 
> Delete the `jws` entry e.g. below from yarn.lock, and re-run `yarn`. The indirect dependency and any affected packages will be updated, without touching other things (on yarn v1.3 at least)

Source: [How to upgrade indirect dependencies? (comment by alex-thewsey-ibm)](https://github.com/yarnpkg/yarn/issues/4986#issuecomment-395036563)

Took me a while to find a good process for this.  I needed it to apply a security update to all indirect dependencies.  Thank goodness for kind strangers like Alex Thewsey.

[This related writeup](https://medium.com/@ayushya/upgrading-javascript-packages-deep-dependencies-using-yarn-8b5983d5fb6b) is also linked in that comment the comment thread.
