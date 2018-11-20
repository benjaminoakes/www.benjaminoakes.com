---
layout: post
title: "Easily parse a CSV file at the command line with Ruby"
category: "CSV"
date: 2018-11-20
---

If you've ever needed to handle a large CSV file at the command line, Ruby is a good option and would be more reliable at CSV parsing than `awk`.  I found this necessary when trying to manipulate a CSV with more than 65k lines, which my available spreadsheet program (Apple's Numbers) didn't like.

This is the base command:

```sh
ruby -rcsv -ne 'puts $_.parse_csv'
```

Broken down:

- `-rcsv` loads ("requires") the built-in CSV library
- `-e` provides a script to execute (rather than a filename)
- `-n` assumes a `while gets` loop around the script provided with `-e`, making `ruby` act a little like `sed` or `awk`

The `$_` variable is the current line, and each line is manipulated separately in the stream.  Once parsed, it's a Ruby Array, so you can use any Enumerable or Array methods.  For example, to get the very last column:

```sh
ruby -rcsv -ne 'puts $_.parse_csv.last'
# or 
ruby -rcsv -ne 'puts $_.parse_csv[-1]'
```

You can pipe it like you'd expect in Unix as well.  As an example, here's how to get the maximum value for the last column of a big CSV file.

```sh
cat big.csv | ruby -rcsv -ne 'puts $_.parse_csv.last' | sort -n | tail -n1
```
