---
id: 137
title: Blocking migration creation in Rails
date: 2011-11-29T16:40:16+00:00
author: Ben
layout: post
permalink: /2011/11/29/blocking-migration-creation-in-rails/
categories:
  - Rails
  - Ruby
---
We have a project that accesses a shared database. To prevent problems (and confusion) we wanted to block the creation of migrations in the &#8220;secondary&#8221; applications so that there was one authoritative place for migrations to live.

It&#8217;s easy to accomplish in a simple way.

If you&#8217;ve never made any migrations in the secondary application, just do this:

<pre><code class="no-highlight">$ echo "NOTE Please do not make migrations in this project.  They should all live in _primary app_." > db/migrate
</code></pre>

That way, when you run `rails g migration foo`, you&#8217;ll get this:

<pre><code class="no-highlight">$ rails g migration foo
      invoke  active_record
      create    db/migrate/20111129162804_foo.rb
[...]/ruby-1.9.2-p180/lib/ruby/1.9.1/fileutils.rb:243:in `mkdir': File exists - [...]/db/migrate (Errno::EEXIST)
</code></pre>

When you try to `cd` into that directory, you&#8217;ll get this:

<pre><code class="no-highlight">$ cd db/migrate
bash: cd: db/migrate: Not a directory
</code></pre>

After you get over the initial &#8220;wha?&#8221; reaction, you&#8217;ll look at `db/migrate` and see the message:

<pre><code class="no-highlight">$ cat db/migrate
NOTE Please do not make migrations in this project.  They should all live in _primary app_.
</code></pre>

Pretty nice, right?