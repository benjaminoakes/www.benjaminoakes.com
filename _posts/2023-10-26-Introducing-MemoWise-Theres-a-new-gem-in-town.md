---
layout: post
title: "Introducing: MemoWise. Theres a new gem in town!"
category: ""
date: 2023-10-26
---

> There was no one gem that matched all of these needs, so we wrote our own! With our new MemoWise gem, memoization is now [as easy as `memo_wise :method_name`]

Source: [Introducing: MemoWise. Theres a new gem in town! Were open](https://medium.com/building-panorama-education/introducing-memowise-51a5f0523489)

I'm under the impression that this helps with [object shapes](https://www.benjaminoakes.com/2023/10/25/Performance-impact-of-the-memoization-idiom-on-modern-Ruby/).

In any case, the below is more intention-revealing and easier to avoid the problems that require `defined?`:

```ruby
def slow_value(x)
  sleep x
  x
end

memo_wise :slow_value
```

Or shorter:

```ruby
memo_wise def slow_value(x)
  sleep x
  x
end
```

If we had been taking an intention-revealing approach like that since the start, the `memo_wise` method could automatically do the object initialization that is recommended for object shapes.  (This may be the point others are making, but I'm just realizing it now myself.)

I recall other people proposing a Python-like "decorator" annotation at a Ruby conference years ago, and perhaps that should have caught on!  While we have a "memoization idiom" that's common (`def foo; @foo ||= expensive_operation; end`), it certainly makes sense that it's difficult to optimize at the language level.
