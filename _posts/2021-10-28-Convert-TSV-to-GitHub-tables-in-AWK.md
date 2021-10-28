---
layout: post
title: "Convert TSV to GitHub tables in AWK"
category: ""
date: 2021-10-28
---

```awk
#!/usr/bin/env awk -f

BEGIN {
  FS = "\t"
  OFS = "|"
}

{
  printf OFS

  for (i = 1; i <= NF; i += 1)
    printf $i OFS

  printf "\n"
}

NR == 1 {
  printf OFS

  for (i = 1; i <= NF; i += 1)
    printf "---" OFS

  printf "\n"
}
```

A tiny AWK program to make GitHub tables from TSV.  (Useful for database results, like Snowflake.)  Here are some more [details about tables in Markdown](https://www.pluralsight.com/guides/working-tables-github-markdown).

There might be a better way to do this in AWK.  Feel free to educate me.  I'm pretty new at it.
