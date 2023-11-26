---
layout: post
title: "Shell scripting: test, [, and [["
category: ""
date: 2023-11-26
---

>What should you use, then? If you are writing a portable shell script (please do), then stick to [. You can also use test, but I don't think that's too common. But if you know your script is going to be Bash-specific anyway, you are probably better served by using [[ unconditionally and consistently, as it provides a lot of nice features (like regular expression matches via =~).

Source: [test, [, and [[ - Julio Merino (jmmv.dev)](https://jmmv.dev/2020/03/test-bracket.html)
