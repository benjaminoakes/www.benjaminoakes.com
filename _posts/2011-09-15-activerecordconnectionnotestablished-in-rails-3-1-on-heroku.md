---
title: ActiveRecord::ConnectionNotEstablished in Rails 3.1 on Heroku
date: 2011-09-15T15:03:50+00:00
author: Ben
layout: post
permalink: /2011/09/15/activerecordconnectionnotestablished-in-rails-3-1-on-heroku/
categories:
  - Rails
  - Ruby
  - Uncategorized
  - Web
tags:
  - popular
  - Rails
  - Rails 3.1.0
  - Ruby
---
**Other languages:** <a href="http://iwhurtafly.hatenablog.com/entry/20120205/1328434152" target="_blank">日本語</a>

We have a simple application that doesn&#8217;t have an `ActiveRecord` dependency. It&#8217;s deployed to Heroku, and it&#8217;s been working fine on Rails 3.0.x since April 2011. We knew we weren&#8217;t using `ActiveRecord` for database connectivity, but we let it be, since it wasn&#8217;t causing any issues.

When upgrading to Rails 3.1, we found that every single page would give `ActiveRecord::ConnectionNotEstablished` on our staging environment on Heroku. The same error didn&#8217;t happen in development. Although we might have been able to get `gem 'pg'` set up and working, we really didn&#8217;t need an ActiveRecord dependency at all.

I found [part of a solution on StackOverflow](http://stackoverflow.com/questions/2212709/remove-activerecord-in-rails-3-beta), but it needed a little tweaking for Rails 3.1.0.

```ruby
# File: config/application.rb

# Pick the frameworks you want:
# require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "active_resource/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"
```

That&#8217;s what Rails 3.1.0 generates when running `rails new myproject --skip-active-record`. (Note that `require "active_record/railtie"` is commented out.) This solved our `ActiveRecord::ConnectionNotEstablished` problem, but gave us a few others, namely:

  * Fixtures
  * `ActiveRecord::RecordNotFound` (used for 404s)

#### Fixtures

There&#8217;s some normal stuff to get rid of in terms of `spec_helper.rb` and/or `test_helper.rb`. Here&#8217;s an example:

```ruby
# File spec/spec_helper.rb

# # If you're not using ActiveRecord, or you'd prefer not to run each of your
# # examples within a transaction, remove the following line or assign false
# # instead of true.
# config.use_transactional_fixtures = true
```

You may have others. [Tarantula](https://rubygems.org/gems/tarantula) had to be adjusted for us, for example.

#### `ActiveRecord::RecordNotFound`

`ActiveRecord::RecordNotFound`, however, was an interesting problem. Everything worked fine without `ActiveRecord` except the places where we were using `ActiveRecord::RecordNotFound` to give a `HTTP 404` to the user agent. That seems strange in a lot of ways, because a `404` shouldn&#8217;t have anything to do with your chosen ORM. My first intuition was to do `require 'active_record/errors'` (see also the [Rails docs](http://api.rubyonrails.org/classes/ActiveRecord/RecordNotFound.html)), but that caused problems with assumptions in `'rspec/rails'`.

Right now, the below is what we ended up with:

```ruby
# File: config/application.rb

# Pick the frameworks you want:
# require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "active_resource/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"

# For errors like ActiveRecord::RecordNotFound
require "active_record"
```

Our automated tests (Rspec, integration tests, Tarantula, Selenium, etc) all pass with it and we no longer get `ActiveRecord::ConnectionNotEstablished`, but we still have an ActiveRecord dependency I don&#8217;t like. (There must be another error we can raise -- I don&#8217;t entirely like the `render '/404.html', status: 404` solution for several reasons.)

**Update:**

This blog post has been translated/incorporated into [a Japanese blog post](http://iwhurtafly.hatenablog.com/entry/20120205/1328434152).

#### Reactions

<blockquote class="twitter-tweet">
  <p>
    To solve this error this site is helpful. <a href="http://t.co/UXFUJrO6">http://t.co/UXFUJrO6</a>
  </p>
  
  <p>
    &mdash; Saka (@iwhurtafly) <a href="https://twitter.com/iwhurtafly/statuses/166094062850547712">February 5, 2012</a>
  </p>
</blockquote>