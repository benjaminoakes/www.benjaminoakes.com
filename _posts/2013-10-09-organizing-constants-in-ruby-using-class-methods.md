---
title: Organizing constants in Ruby using class methods
date: 2013-10-09T13:50:13+00:00
author: Ben
layout: post
permalink: /2013/10/09/organizing-constants-in-ruby-using-class-methods/
categories:
  - Programming
  - Ruby
tags:
  - class
  - class method
  - constants
  - maintenance
  - organization
---
[We](http://www.continuity.net) were recently discussing how to organize a collection of constant values in a Ruby/Rails app. A lot of people tend to instinctively choose `CONSTANTS` for this use, but they can be hard to organize, hard to test, and harder to read.

```ruby
class Foo
  BAZ = [["baz", "qux"], ["panda", "bamboo"]]
end

puts Foo::BAZ.inspect # => [["baz", "qux"], ["panda", "bamboo"]]
```

Instead, consider class methods that return constant values like so:

```ruby
class Foo
  def self.bar
    %w(baz qux)
  end

  def self.foo
    %w(panda bamboo)
  end

  BAZ = [bar, foo]
end

puts Foo::BAZ.inspect # => [["baz", "qux"], ["panda", "bamboo"]]
```

That allows composure of values with some extra organization, which is handy if you need to keep a certan named constant around (`Foo::BAZ` in this case).

Of course, you could only use class methods:

```ruby
class Foo
  def self.bar
    %w(baz qux)
  end

  def self.foo
    %w(panda bamboo)
  end

  def self.baz
    [bar, foo]
  end
end

puts Foo.baz.inspect # => [["baz", "qux"], ["panda", "bamboo"]]
```

That approach has an added benefit of being easier to refactor and test as use cases change. Unlike `CONSTANTS`, you could add optional parameters, etc as the need comes up.
