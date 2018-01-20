---
title: 'Why can&#8217;t I connect to Heroku Postgres in production?'
date: 2012-08-29T03:53:52+00:00
author: Ben
excerpt: |
  <p><strong>Summary:</strong>  Switching to Heroku Postgres?  If you use a Crane or Kappa database instance, you might run into problems with using a non-standard port when connecting to PostgreSQL in production.  (The problem may not happen in your staging environment because of Heroku internals.)  Our app is a Padrino-based web service, but the problem described could happen to any framework/code that only expects standard port numbers.  Check to make sure the non-standard port is handled correctly.</p>
  
  <p>I hope this helps someone else in a similar predicament!  Please let me know in the comments.</p>
  
  <p><strong>More after the break...</strong></p>
layout: post
permalink: /2012/08/29/why-cant-i-connect-to-heroku-postgres-in-production/
categories:
  - Heroku
  - Linux
  - Open Source
  - PostgreSQL
  - Rails
  - Ruby
  - Testing
---
**Summary:** Switching to Heroku Postgres? If you use a Crane or Kappa database instance, you might run into problems with using a non-standard port when connecting to PostgreSQL in production. (The problem may not happen in your staging environment if you use the dev plan.) Our app is a Padrino-based web service, but the problem described could happen to any framework/code that only expects standard port numbers. Check to make sure the non-standard port is handled correctly.

I hope this helps someone else in a similar predicament! Please let me know in the comments.

**Note:** Much of the below is based off of a written discussion we had with Heroku support. Thanks for your help, guys! (I&#8217;ve changed usernames, passwords, etc., for obvious reasons.)

* * *

We recently migrated from a Heroku Shared Database to Heroku Postgres, per [their migration instructions](https://devcenter.heroku.com/articles/migrating-from-shared-database-to-heroku-postgres).

The steps went as expected for our staging application, but **NOT** for the production one. This app runs on the Bamboo stack. We could access the PostgreSQL database via `heroku pg:psql HEROKU_POSTGRESQL_OUR_COLOR` as expected, but when we did `heroku console`, we got the following error:

<pre>&gt;&gt; User.last
PGError: could not connect to server: Connection refused
  Is the server running on host "ec2-12-34-567-890.compute-1.amazonaws.com" and accepting
  TCP/IP connections on port 5432?

  /app/.bundle/gems/ruby/1.8/gems/activerecord-3.1.4/lib/active_record/connection_adapters/postgresql_adapter.rb:1116:in `initialize'
  /app/.bundle/gems/ruby/1.8/gems/activerecord-3.1.4/lib/active_record/connection_adapters/postgresql_adapter.rb:1116:in `connect'
  /app/.bundle/gems/ruby/1.8/gems/activerecord-3.1.4/lib/active_record/connection_adapters/postgresql_adapter.rb:1116:in `connect'
  /app/.bundle/gems/ruby/1.8/gems/activerecord-3.1.4/lib/active_record/connection_adapters/postgresql_adapter.rb:320:in `initialize'
</pre>

That confused us, as we would expect **both** `psql` and `console` to fail the same way.

We investigated and noticed that `HEROKU_POSTGRESQL_OUR_COLOR` had a non-standard port (5602):

<pre>postgres://username:password@ec2-12-34-567-890.compute-1.amazonaws.com:5602/databasename
</pre>

To test whether that made a difference, we changed our `DATABASE_URL` environment variable to have the standard port (5432):

<pre>postgres://username:password@ec2-12-34-567-890.compute-1.amazonaws.com:5432/databasename
</pre>

However, that did **NOT** make a difference. We also checked `config/database.yml`, and it seemed to have correct values.

We were left with a production application that could not connect to its database. As a workaround, we promoted the shared database back to being in use:

<pre>heroku pg:promote SHARED_DATABASE
</pre>

We opened a support ticket with Heroku, and later heard back that there were issues with the Heroku-generated `config/database.yml`. It did not pick up the non-default port number, which is required for Crane. They updated some code on their end to generate the `config/database.yml` correctly.

We confirmed that the `database.yml` was created correctly, but unfortunately that wasn&#8217;t the entire problem. Our `config/database.rb` file (used by the Padrino framework) did not handle the non-standard Postgres port either. After realizing that, it was a simple fix to get the database connection working again; we just had to include the `port` value in the call to `ActiveRecord::Base.establish_connection`.

(For those keeping score, there was a total of 2 &#8220;non-standard port&#8221; bugs happening at the same time.)

Out of curiosity, we asked why non-standard port numbers were used. We were told that they&#8217;re only used in the Crane and Kappa plans, so one of those would need to be used in staging to have the same setup. The current implementation of Crane and Kappa use a multi-tenant system, so they listen on multiple ports instead of a single port. (Crane and Kappa are the least expensive production database plans.) We were also told the port numbers could change in the future.

**Moral of the story:** Make sure your app works without depending on the defaults. That&#8217;s good advice in general; it would probably be best to test that you don&#8217;t depend on tacit default values for **anything** (databases or otherwise). One way of doing this would be testing with non-standard values when developing.