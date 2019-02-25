---
layout: post
title: "Generate a Cartesian product of example values, useful for specs"
category: "ruby"
date: 2019-02-25
---

```ruby
  # Cartesian product of example values.  Also with missing keys for nil values.
  #
  # >> generate_examples(a: [1, 2], b: [3, nil])
  # => [{:a=>1, :b=>3}, {:a=>1, :b=>nil}, {:a=>2, :b=>3}, {:a=>2, :b=>nil}, {:a=>1}, {:a=>2}]
  def generate_examples(possible_values)
    examples =
      possible_values.
      values.
      reduce { |acc, value| acc.product(value).map(&:flatten) }.
      map { |example| Hash[possible_values.keys.zip(example)] }

    with_compacted_values = examples.map(&:compact) - examples

    examples + with_compacted_values
  end
```

This is a useful snippet I've been using in RSpec (and some other contexts) when I know valid example values and want to test all variations on it, including missing data.  This can really cut down on how many examples have to be written by hand.

(I think this may depend on some behavior of ActiveSupport's `#compact`.)
