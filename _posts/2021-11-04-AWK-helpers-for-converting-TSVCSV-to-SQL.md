---
layout: post
title: "AWK helpers for converting TSV/CSV to SQL"
category: "programming"
date: 2021-11-04
---

TSV to SQL (`tsv2sql`):

```awk
BEGIN {
  FS = "\t"
}

{
  gsub("\r", "")
}

NR == 1 {
  split($0, columns, "\t")

  for (i in columns) {
    column = tolower(columns[i])
    gsub(" ", "_", column)
    db_columns[i] = column
  }

  printf "CREATE TABLE table_name ("

  for (i in db_columns) {
    if (i > 1) printf ", "

    printf db_columns[i] " VARCHAR(191)"
  }

  printf ");\n"
}

NR > 1 {
  printf "INSERT INTO table_name ("

  for (i in db_columns) {
    if (i > 1) printf ", "

    printf db_columns[i]
  }

  printf ") VALUES ("

  for (i in db_columns) {
    if (i > 1) printf ", "

    if ($i == "NULL" || $i ~ /^[0-9]+$/) {
      printf $i
    } else {
      printf "\"" $i "\""
    }
  }

  printf ");\n"
}
```

TSV to RSpec/FactoryGirl (`tsv2ruby`):

```awk
BEGIN {
  FS = "\t"
}

{
  gsub("\r", "")
}

NR == 1 {
  split($0, columns, "\t")

  for (i in columns) {
    column = tolower(columns[i])
    gsub(" ", "_", column)
    db_columns[i] = column
  }
}

NR > 1 {
  print "create(:model_name,"

  for (i in db_columns) {
    printf "  " db_columns[i] ": "

    if ($i == "NULL") {
      printf "nil"
    } else {
      printf "\"" $i "\""
    }

    printf ",\n"
  }

  print ")\n"
}
```
