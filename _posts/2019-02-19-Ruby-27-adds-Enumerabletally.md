---
layout: post
title: "Ruby 2.7 adds Enumerable#tally"
category: "ruby"
date: 2019-02-19
---

```ruby
%w(foo foo bar foo baz foo).tally
# => {"foo"=>4, "bar"=>1, "baz"=>1}
```

Source: [Ruby 2.7 - Enumerable#tally - Brandon Weaver - Medium](https://medium.com/@baweaver/ruby-2-7-enumerable-tally-a706a5fb11ea)

Sounds familiar: [I use this `count_by` method (previously discussed on this blog)](http://www.benjaminoakes.com/2014/01/24/count_by-in-ruby/)  on occasion.
