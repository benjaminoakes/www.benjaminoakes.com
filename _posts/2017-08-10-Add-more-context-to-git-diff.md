---
layout: post
title:  "Add more context to git diff"
date:   2017-08-10
---

> The -U flag specifies lines of context.

Source: [How to get git diff with full context? - Stack Overflow](https://stackoverflow.com/questions/13627598/how-to-get-git-diff-with-full-context)

```
-U<n>, --unified=<n>
    Generate diffs with <n> lines of context instead of the usual three. Implies -p.
```

Source: `git diff --help`

Kind of like `--context` or `-C` for `grep` or `git grep`.
