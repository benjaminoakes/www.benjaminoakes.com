---
layout: post
title: "How \"Exit Traps\" Can Make Your Bash Scripts Way More Robust And Reliable"
category: ""
date: 2023-06-23
---

>There is a simple, useful idiom to make your bash scripts more robust - ensuring they always perform necessary cleanup operations, even when something unexpected goes wrong. The secret sauce is a pseudo-signal provided by bash, called EXIT, that you can trap; commands or functions trapped on it will execute when the script exits for any reason. Let's see how this works.
>
>The basic code structure is like this:

```
#!/bin/bash
function finish {
  # Your cleanup code here
}
trap finish EXIT
```

Source: [How "Exit Traps" Can Make Your Bash Scripts Way More Robust And Reliable](http://redsymbol.net/articles/bash-exit-traps/)

Something to try to keep in mind!
