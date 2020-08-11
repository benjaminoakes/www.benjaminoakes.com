---
layout: post
title: "Snippet: copy notes to Google Keep"
category: "shell"
date: 2020-08-11
---

This is a quick script I made to copy some notes to Google Keep.  Each file had the title on the first line like so:

```
Title 1

- Item 1
- Item 2
- Item 3
```

```
Title 2

- Item 4
- Item 5
- Item 6
```

This script for macOS will copy the title and then the body and remove the file:

```bash
#!/usr/bin/env bash

printf "File: $1\n"

printf "Making a new note...\n"

open "https://note.new"

head -n1 "$1" | tr -d "\n" | pbcopy
printf "(paste title)"
read

awk 'FNR>2' "$1" | pbcopy
printf "(paste body)"
read

printf "Removing...\n"
git rm "$1"
```
