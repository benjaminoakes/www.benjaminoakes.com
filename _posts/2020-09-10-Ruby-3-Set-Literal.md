---
layout: post
title: "Ruby 3 Set Literal"
category: "ruby"
date: 2020-09-10
---

```
# What's it look like?
set = { 1, 2, 3 }
set.include?(3) # => true

# Originally this might have looked like this:
set = Set[1, 2, 3]
set.include?(3) # => true
```

Source: [Ruby 3 - Set Literal - DEV](https://dev.to/baweaver/ruby-3-set-literal-3fp9)

To be honest, `Set[1, 2, 3]` seems fine to me vs new syntax.  Really, I just need to remember it's there when I don't care about order.
