---
layout: post
title: "yn, a simple yes/no helper script"
category: "ruby"
date: 2018-11-09
---

```ruby
#!/usr/bin/env ruby

response = nil

begin
  while !%w[y n].include?(response) do
    print "y/n? "
    response = gets.chomp
    puts "response: #{(response).inspect}"
  end

  if response == "y"
    exit 0
  else
    exit 1
  end
rescue Interrupt
  exit 2
end
```

This is just a short script I wrote to ask whether something did or didn't happen correctly.  Just answer `y` or `n`.  It's sometimes very useful when an automated test is infeasible for [`git-bisect`](http://www.benjaminoakes.com/2014/04/29/recipe-git-bisect/).
