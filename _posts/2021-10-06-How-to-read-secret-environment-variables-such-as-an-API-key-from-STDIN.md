---
layout: post
title: "How to read secret environment variables (such as an API key) from STDIN"
category: "computing"
date: 2021-10-06
---

It's a best practice not to type passwords into a shell prompt, as it will be logged in the shell history.  Here's an alternative.

```sh
read -s API_KEY && export API_KEY
```

The `read` command will prompt for a variable and it is not echoed as it is typed.  The `export` command makes it available to other processes.

There are sometimes better options (e.g., writing `export` statements to a file that is read via `source`), but the above is a handy way of handling secrecy in a one-off way.
