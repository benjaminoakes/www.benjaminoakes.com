---
id: 110
title: Rails Timezones
date: 2010-11-23T16:24:10+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=110
permalink: /2010/11/23/rails-timezones/
categories:
  - Rails
tags:
  - cst
  - datetime
  - est
  - popular
  - pst
  - Rails
  - Ruby
  - time
  - timezones
---
I ran into a Rails 3.0.1 timezone issue today that I didn&#8217;t see discussed many other places.

Basically, I just want to have a page in my app that shows the time in different time zones. That seems simple and something tailor suited for timezone support.

I started with this:

<pre><code class="language-irb">>> Time.now.in_time_zone('EST')
=> Tue, 23 Nov 2010 11:09:42 EST -05:00
</code></pre>

Okay, so far so good. Next:

<pre><code class="language-irb">>> Time.now.in_time_zone('PST')
NoMethodError: undefined method `period_for_utc' for nil:NilClass
[...]
>> Time.now.in_time_zone('CST')
NoMethodError: undefined method `period_for_utc' for nil:NilClass
[...]
</code></pre>

Wait, that&#8217;s odd... why doesn&#8217;t that work? After searching, I found you could use some city names like so:

<pre><code class="language-irb">>> Time.now.in_time_zone('Tokyo')
=> Wed, 24 Nov 2010 01:04:54 JST +09:00
</code></pre>

But of course JST won&#8217;t work:

<pre><code class="language-irb">>> Time.now.in_time_zone('JST')
NoMethodError: undefined method `period_for_utc' for nil:NilClass
[...]
</code></pre>

And neither will major American cities:

<pre><code class="language-irb">>> Time.now.in_time_zone('New York')
NoMethodError: undefined method `period_for_utc' for nil:NilClass
[...]
>> Time.now.in_time_zone('Chicago')
NoMethodError: undefined method `period_for_utc' for nil:NilClass
[...]
</code></pre>

Nothing too relevant came up when I googled the above errors and phrases (part of why I&#8217;m posting this), but then I came across the `rake time:zones:us` and `rake time:zones:all` Rake tasks. They list valid timezones for you.

The thing that gets me is that `'EST'` and `'Tokyo'` work as expected, but `'PST'` and `'New York'` don&#8217;t. These are what I ended up with:

<pre><code class="language-irb">>> Time.now.in_time_zone('Eastern Time (US & Canada)')
=> Tue, 23 Nov 2010 11:08:12 EST -05:00
>> Time.now.in_time_zone('Central Time (US & Canada)')
=> Tue, 23 Nov 2010 10:06:08 CST -06:00
>> Time.now.in_time_zone('Pacific Time (US & Canada)')
=> Tue, 23 Nov 2010 08:06:23 PST -08:00
</code></pre>

Ironically, it lists EST, CST, and PST in the results. It&#8217;s still confusing to me why the longhand version is the preferred notation here (sometimes), but at least you&#8217;re given the tools to look it up.

Like always, let me know if this post helps you through an error. We&#8217;re all in this together.

**Update:** The good people over at Airbnb <a href="http://nerds.airbnb.com/upgrading-airbnb-from-rails-23-to-rails-30" target="_blank">found this post helpful when upgrading from Rails 2.3 to 3.0</a>. I&#8217;m glad it helped you out!