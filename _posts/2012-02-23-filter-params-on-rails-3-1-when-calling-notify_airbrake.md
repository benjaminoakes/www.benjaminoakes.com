---
id: 141
title: Filter params on Rails 3.1 when calling notify_airbrake
date: 2012-02-23T22:16:45+00:00
author: Ben
excerpt: |
  <p>We recently noticed that Airbrake doesn't always filter our parameters.</p>
  
  <p>I looked into the cases, and eventually narrowed it down to this:  an unhandled exception is filtered properly, but a notification made via <code>notify_airbrake</code> does not.</p>
layout: post
permalink: /2012/02/23/filter-params-on-rails-3-1-when-calling-notify_airbrake/
categories:
  - Open Source
  - Rails
  - Ruby
  - Technology
---
From my recent [pull request on Airbrake](https://github.com/airbrake/airbrake/pull/59):

> We recently noticed that Airbrake doesn&#8217;t always filter our parameters.
>
> I looked into the cases, and eventually narrowed it down to this: an unhandled exception is filtered properly, but a notification made via `notify_airbrake` does not.
>
> I traced the problem to
>
> `Airbrake::Rails::ControllerMethods#airbrake_filter_if_filtering`:
>
> ```ruby
> def airbrake_filter_if_filtering(hash)
>   return hash if ! hash.is_a?(Hash)
>
>   if respond_to?(:filter_parameters)
>     filter_parameters(hash) rescue hash
>   else
>     hash
>   end
> end
> ```
>
> After doing some research, I found that `filter_parameters` is a [Rails 2](https://github.com/rails/rails/blob/v2.1.2/actionpack/lib/action_controller/base.rb#L487) method that has since been replaced by [ActionDispatch::Http::ParameterFilter](http://stackoverflow.com/questions/6152388/manually-filter-parameters-in-rails). There are other methods used in Airbrake are deprecated by Rails. For example [filter\_parameter\_logging](http://apidock.com/rails/ActionController/Base/filter_parameter_logging/class) (found in `test/catcher_test.rb`) disappeared after Rails 2.3.8.
>
> I attempted to add a test for my changes, but couldn&#8217;t reproduce the problem using the available helpers in `test/catcher_test.rb`, although the problem clearly exists in our production use. As near as I can tell `process_action_with_manual_notification` may not actually be testing in a realistic way; there seem to be at least two ways that Airbrake filters parameters. If I&#8217;m missing something, please point me in the right direction.
>
> At any rate, the changes in this pull request fixes the problem when I tested on a staging environment. Our app is using Ruby 1.9.2p180 and Rails 3.1.2 at the time of this writing.
