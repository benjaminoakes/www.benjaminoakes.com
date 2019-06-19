---
layout: post
title: "Learnings about wrapped exceptions in Ruby using the built-in Exception#cause"
category: "ruby"
date: 2019-06-19
---

[Starting in Ruby 2.1, Ruby has `Exception#cause`](https://ruby-doc.org/core-2.1.0/Exception.html#method-i-cause) which wraps the previous exception.  This is typically referred to as a "wrapped exception."  Before Ruby 2.1, many projects would add a similar feature on a per-error basis.  (If you happen to be on a version of Ruby before 2.1, there's [a backport gem which adds the feature](https://rubygems.org/gems/cause)... but please try to upgrade.)

This is now widely supported and defaults to `$!`.  It should generally work in error reporting applications like [Bugsnag](https://www.bugsnag.com/), which renders the `cause` as "caused by" in the stacktrace tab.

Finally, unlike Java, which allows a nested exception's cause to be set manually, Ruby only allows `#cause` to be `$!` at the time that the wrapping exception is raised.  There is no `#cause=` or argument to `Exception.new`, and `$!` is a read-only variable.  See [the feature in Ruby's Redmine](https://bugs.ruby-lang.org/issues/8257) for discussion about the reasoning.  In effect, if you want to wrap an exception, you have to re-raise.  This makes using any kind of `Exception` (`StandardError`, etc) as a value object more difficult.  This includes use of `Exception#cause` in tests/specs or as a return value when you'd like to avoid the overhead of yet another `raise`.

Overall, `Exception#cause` is a great addition to base Ruby, but I would love an option like `initCause` in Java.

Charles Nutter said [this](https://bugs.ruby-lang.org/issues/8257#change-43938):

> Since the base #cause and $! logic made it in, perhaps we should call this bug closed as of 2.1 and add a new bug for additional ways to initialize the exception cause.

...but I'm not aware of any work to allow `@cause` to be manually set.
