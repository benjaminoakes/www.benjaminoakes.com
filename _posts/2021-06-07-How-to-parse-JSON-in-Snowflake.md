---
layout: post
title: "How to parse JSON in Snowflake"
category: "database"
date: 2021-06-07
---

Example:

```sql
select parse_json(json_column):json_field
from foo.bars
;
```

This is useful for analyzing semi-structured data that happens to be stored as JSON.

Resources:

- [JSON Data Parsing in Snowflake](https://community.snowflake.com/s/article/json-data-parsing-in-snowflake)
- [PARSE_JSON  Snowflake Documentation](https://docs.snowflake.com/en/sql-reference/functions/parse_json.html)
- [GET_PATH , :  Snowflake Documentation](https://docs.snowflake.com/en/sql-reference/functions/get_path.html)
