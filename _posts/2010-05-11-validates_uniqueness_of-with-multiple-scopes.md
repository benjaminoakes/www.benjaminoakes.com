---
title: Rails validations should be instance level, not class level
date: 2010-05-11T16:22:17+00:00
author: Ben
layout: post
permalink: /2010/05/11/rails-validations-should-be-instance-level-not-class-level
redirect_from:
  - /2010/05/11/validates_uniqueness_of-with-multiple-scopes/
categories:
  - Rails
tags:
  - opinion
  - Rails
  - validation
---
I recently ran into a problem where I needed to use `validates_uniqueness_of` with more than one scope. Basically, I have resources that users can either share or keep to themselves. Each resource has a description that should be unique. **However**, the scope of the uniqueness depends on the situation. In **pseudo-code**, I wanted something like:

```ruby
if shared?
  validates_uniqueness_of :description, :scope => :shared
else
  validates_uniqueness_of :description, :scope => :user_id
end
```

(That is, if you share, the description should be unique across all the shared resources. Otherwise, it should just be unique within _your_ stuff.)

That seems straightforward, but it&#8217;s complicated by the fact that Rails validations are at the **class**-level rather than the **instance**-level. To me, it makes more sense to execute validations at the instance-level.

Specifically because they&#8217;re _not_ executed at the instance-level, validations like `validates_uniqueness_of` need &#8220;smelly&#8221; option keys like `:if` and `:unless`. If the validations were executed in the proper context (i.e., in the context of the instance that&#8217;s being validated), Rails wouldn&#8217;t need any of that hackery. The real `if` and `unless` could be used **directly**.

The Hashrocket folks said something similar in their [Rails 3 Blog Club -- Week 1](http://www.vimeo.com/9168664) video. As far as I know, the situation is staying the same in Rails 3, even with all the validation refactoring. Even so, I think there&#8217;s a strong argument for moving validations to the instance level.

For example, _if_ validations were executed in the context of the model instance, the above would have translated directly to something like this:

```ruby
class MyModel < ActiveRecord::Base
  # [...]

  def validate
    if shared?
      validate_uniqueness_of :description, :scope => :shared
    else
      validate_uniqueness_of :description, :scope => :user_id
    end
  end
end
```

(Note for blog skimmers, the above code does **NOT** work.)

Instead, I ended up with the following:

```ruby
class MyModel < ActiveRecord::Base
  validates_uniqueness_of :description, :scope => :shared, :if => :shared?
  validates_uniqueness_of :description, :scope => :user_id, :unless => :shared?
end
```

The `:if` / `:unless` keys still feel like a hack to me. (I&#8217;m scared they will break in non-obvious ways, to be honest -- I think I&#8217;ve already found a couple of corner cases.)

Am I missing something when it comes to why validations were designed this way? If so, how would you approach this problem?
