---
layout: post
title: "Best practice to mark deprecated code in Ruby"
category: "ruby"
date: 2021-10-28
---

```ruby
class MyFile
  extend Gem::Deprecate

  def no_more
    close
  end
  deprecate :no_more, :close, 2015, 5

  def close
    # new logic here
  end
end

MyFile.new.no_more
# => NOTE: MyFile#no_more is deprecated; use close instead. It will be removed on or after 2015-05-01.
# => MyFile#no_more called from my_file.rb:16.
```

Source: [Best practice to mark deprecated code in Ruby? - Anser on StackOverflow](https://stackoverflow.com/a/23554720/146764)

Documentation here: [Module: Gem::Deprecate (Ruby 3.0.2)](https://ruby-doc.org/stdlib-3.0.2/libdoc/rubygems/rdoc/Gem/Deprecate.html).  Much better than just a comment.
