---
layout: post
title:  "`yield_self` in Ruby 2.5"
date:   2017-09-29
---

> This is its definition. Slightly simplified
>
>     # object.yield_self {|x| block } → an_object
>     # Yields self to the block and returns the result of the block.
>
>     class Object
>       def yield_self
>         yield(self)
>       end
>     end
>
>
>     # [...]
>
>     "data.csv"
>       .yield_self { |name| File.expand_path(name, __dir__) }
>       .yield_self { |path| File.read(path) }
>       .yield_self { |body| CSV.parse(body) }
>       .map        { |row|  row[1].to_i }
>       .sum

Source: [`yield_self` in Ruby 2.5 // Michał Łomnicki](http://mlomnicki.com/yield-self-in-ruby-25/)

The resulting code reminds me a tiny bit of `|>` in Elixir:

```
Enum.take_while(1..limit, fn (n) -> fib(n) < limit end)
  |> Enum.map(&fib/1)
  |> Enum.filter(&even/1)
  |> Enum.sum
```
