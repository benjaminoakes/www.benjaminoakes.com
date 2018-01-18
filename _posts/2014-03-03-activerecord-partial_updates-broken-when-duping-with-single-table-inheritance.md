---
id: 452
title: ActiveRecord partial_updates broken when duping with Single Table Inheritance
date: 2014-03-03T17:40:26+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=452
permalink: /2014/03/03/activerecord-partial_updates-broken-when-duping-with-single-table-inheritance/
categories:
  - Rails
tags:
  - active_record
  - mysql
  - mysql2
  - partial_updates
  - Rails
  - rails4
  - Ruby
---
We ran into a strange bug in ActiveRecord when upgrading our Rails 3.2.x app to Rails 4.0.x. The bug was that we would `dup` a record, change some values, save it, and only the values we had changed would be used in the `INSERT` statement. That is, none of the values that came from the duped object would be used. It turned out to be a bug in the implementation of `partial_updates` in ActiveRecord, but the cause wasn&#8217;t as obvious as we first thought.

Because we tracked it down to `partial_updates`, our first inclination was just to disable `partial_updates` like so: 

```ruby
ActiveRecord::Base.partial_updates = false 
```

That definitely worked, but seemed like disabling a default Rails feature shouldn&#8217;t have been necessary. We tracked the problem down so that we could keep using `partial_updates`.

Here&#8217;s some code that reproduces our issue:

```ruby
# class CreateTestUsers < ActiveRecord::Migration
#   def change
#     create_table :test_users do |t| 
#       t.string :name, :null => false
#       t.string :email
#       t.string :type
#   
#       t.timestamps
#     end 
#   end 
# end 

class TestUser < ActiveRecord::Base
  validates :email, :presence => true
  validates :name, :presence => true
end 

class UserA < TestUser
end 

class UserB < TestUser
end

original_user = UserA.create(:email => 'johndoe@gmail.com',
                             :name => 'John Doe')

dup_user = original_user.dup.becomes(UserB)
dup_user[:type] = 'UserB'
dup_user.email = 'dup@gmail.com'
dup_user.save! # exception!
# ActiveRecord::StatementInvalid: Mysql2::Error: Field 'name' doesn't have
# a default value: INSERT INTO `test_users` (`created_at`, `email`, `type`,
# `updated_at`) VALUES ('2014-03-03 16:33:23', 'dup@gmail.com', 'UserB',
# '2014-03-03 16:33:23')
```

Certainly not the most common of use cases; it was clear that STI was causing the issue as we worked on creating our minimal test case.

After reviewing how `becomes` works, we came to the conclusion that it was mangling the state of the object in the way that caused the bug. As you might expect, changing the call order made the difference.

This alternative works with `partial_updates` enabled:

```ruby
dup_user = original_user.becomes!(UserB).dup
dup_user.email = 'dup@gmail.com'
dup_user.save!
```

One could argue that there&#8217;s still a bug to fix in Rails, but this is such a corner case that we probably have one of very few codebases that had this issue. We **might** take the time to submit a pull request, but a blog post is a lot more likely to help someone else in the meantime.

Versions:

  * Ruby 2.1.1
  * Rails 4.0.3
  * mysql2 gem 0.3.15
  * MySQL Server 5.5.27