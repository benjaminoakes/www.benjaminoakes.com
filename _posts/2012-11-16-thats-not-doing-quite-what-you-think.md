---
title: 'That&#8217;s not doing quite what you think...'
date: 2012-11-16T03:39:12+00:00
author: Ben
excerpt: "<p>I recently helped an intern at Hedgeye work through a problem with a database query.  Because I'm working in a separate timezone, I ended up making suggestions through a GitHub pull request.  We discussed and decided that what I wrote was self-contained enough that I should re-post so it can help others.</p>"
layout: post
permalink: /2012/11/16/thats-not-doing-quite-what-you-think/
categories:
  - Debugging
  - GitHub
  - MySQL
  - PostgreSQL
  - Programming
  - Rails
  - Ruby
  - Sharing
  - Technology
  - Testing
---
I recently helped an intern at Hedgeye work through a problem with a database query. Because I&#8217;m working in a separate timezone, I ended up making suggestions through a GitHub pull request. We discussed and decided that what I wrote was self-contained enough that I should re-post so it can help others.

> ```ruby
:conditions => ["event_type != ?", 'LOGIN'||'LOGOUT'],
```
> 
> I don&#8217;t think this is doing quite what you think...
> 
> ```ruby
'LOGIN' || 'LOGOUT' # => 'LOGIN'
```
> 
> So this turns into:
> 
> ```sql
where event_type != 'LOGIN'
```
> 
> I&#8217;m guessing you meant to do:
> 
> ```sql
where event_type != 'LOGIN' or event_type != 'LOGOUT'
```
> 
> But, believe it or not, `!=` is a MySQL proprietary extension to SQL. It would probably be best to use something that&#8217;s a part of ANSI SQL:
> 
> ```sql
where event_type <> 'LOGIN' or event_type <> 'LOGOUT'
-- alternative:
where event_type not in ('LOGIN', 'LOGOUT')
```
> 
> Because these are literals (not user-provided values), there&#8217;s no point in sanitization using `?`.
> 
> **Conclusion:**
> 
> ```ruby
:conditions => "event_type not in ('LOGIN', 'LOGOUT')",
```