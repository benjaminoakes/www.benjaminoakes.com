---
layout: post
title: "civiccc/db-query-matchers: RSpec matchers for database queries"
category: "ruby"
date: 2019-05-31
---

> RSpec matchers for database queries made by ActiveRecord.

Examples from the docs:

```
  context 'when we expect exactly 1 query' do
    it 'makes database queries' do
      expect { subject.make_one_query }.to make_database_queries(count: 1)
    end
  end

  # ...

  context 'when we only care about manipulative queries (INSERT, UPDATE, DELETE)' do
    it 'makes a destructive database query' do
      expect { subject.make_one_query }.to make_database_queries(manipulative: true)
    end
  end

  # ...

  context 'when we only care about queries matching a certain pattern' do
    it 'makes a destructive database query' do
      expect { subject.make_special_queries }.to make_database_queries(matching: 'DELETE * FROM')
    end
  end
```

Source: [civiccc/db-query-matchers: RSpec matchers for database queries](https://github.com/civiccc/db-query-matchers)

Seems like this could simplify some specs by quite a bit, but still be just as expressive.
