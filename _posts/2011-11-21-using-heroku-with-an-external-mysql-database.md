---
id: 136
title: Using Heroku with an external MySQL database
date: 2011-11-21T20:33:10+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=136
permalink: /2011/11/21/using-heroku-with-an-external-mysql-database/
categories:
  - Rails
  - Ruby
tags:
  - contribution
  - database
  - external
  - gem
  - heroku
  - mysql
  - oss
  - popular
  - Rails
  - Ruby
---
We recently had a need to use Heroku with an external MySQL database. Thankfully, there was already a [gem](https://github.com/nbudin/heroku_external_db) that solved the problem. However, it didn&#8217;t have that much by the way of documentation, so I wrote this up and contributed it to the author. Also, I added X.509 support, which we required.

* * *

**NOTE:** After my pull requests are merged, you should look to [the main repository&#8217;s README](https://github.com/nbudin/heroku_external_db) which has a copy of the below.

* * *

#### Example: MySQL with a CA Certificate

In this example, we are setting up a connection to an external MySQL server using the default initializer.

What we have:

  * A CA certificate called <tt>ca-cert.pem</tt>

  * A database is available at mysql://username:password@server/dbname (where <tt>username</tt>, <tt>password</tt>, <tt>server</tt>, and <tt>dbname</tt> are the appropriate values for our server)

  * Other security, e.g. firewalls. Please make sure to open the appropriate ports and grant the necessary access for your database to be available externally. Further discussion is outside the scope of this document, but for accessing EC2, you might start at [devcenter.heroku.com/articles/external-services](http://devcenter.heroku.com/articles/external-services).

First, we configure Heroku with the appropriate environment variables:

```bash
# You may have to specify the app name or remote name here via --app or --remote, respectively
heroku config:add EXTERNAL_DATABASE_CA='ca-cert.pem'
heroku config:add EXTERNAL_DATABASE_URL='mysql://username:password@server/dbname'
```

By default, <tt>heroku_external_db</tt> looks for the CA cert in
  
<tt>config/ca</tt>, so we need to commit it:

```bash
mkdir -p config/ca
cp path/to/ca-cert.pem config/ca
git add config/ca
git commit -v # Using -v since we want to make sure the contents are what we expect (e.g. not a private key)
```

Additionally, we need the <tt>mysql</tt> gem in our Gemfile since we are setting up a MySQL server:

```bash
echo "gem 'mysql', '~> 2.8.1'" >> Gemfile
bundle install # Need Gemfile.lock too
```

Keep in mind that Heroku installs its own <tt>database.yml</tt> for Rails apps and we have to install <tt>pg</tt> as well. Unfortunately, shared databases are mandatory (but are free).

```
$ heroku addons:remove shared-database:5mb
-----> Removing shared-database:5mb from our-app... failed
 !     Shared databases cannot be removed
```

PostgreSQL may still be useful to you if, for example, you want to have feature toggles in a local database, but the main data kept externally. However in our case, it also means all developers will need MySQL and PostgreSQL running locally, which is unfortunate.

One workaround is only installing <tt>pg</tt> in production:

```ruby
# File: Gemfile

# *Only* needed on production.
group :production do
  gem 'pg', '~> 0.11.0' # Regardless of whether you plan to use the database or not, Heroku requires you have 'pg' installed.
end
```

Then <tt>bundle</tt> like so:

```bash
bundle install --without production
```

With our gems updated, commit:

```bash
git commit -av # Commit Gemfile and Gemfile.lock
```

Another option may be overriding <tt>database.yml</tt> somehow, although it would add complexity. For more info, please see [stackoverflow.com/questions/4204724/strategies-for-overriding-database-yml](http://stackoverflow.com/questions/4204724/strategies-for-overriding-database-yml).

With our dependencies out of the way, we can move on to testing the connection.

If you are making a new application, you may wish to have a simple MVC for testing that the connection works. E.g., for a blog style application with posts do:

```bash
rails generate scaffold post
# NOTE you probably want to change the default "Post.all" to "Post.limit(5)" or something similar
git add .
git commit # ...
# Don't forget to set a default route, etc.
```

With all these changes committed, we can deploy to our Heroku app:

```bash
git push heroku master # Your remote may be different
```

Now, since we are connecting to an existing database, we don’t need to run any migrations. (Keep in mind that when sharing a database, it is best to have one authoritative source for migrations to live.) If in your situation you’re creating a new database, you may need to do that, run migrations, seed the database, etc at this point.

Open [our-app.heroku.com](http://our-app.heroku.com) and we should see our data. If you happen to run into a problem, please check the logs first:

```bash
heroku logs --tail # Again, you may need to specify an app
```

If you are having a problem, a good starting point is double checking your passwords, usernames, security settings, etc.

#### Example: MySQL with X.509

The process is very much the same as the above example, except two extra environment variables and files are required. Below are the extra steps.

What we have:

  * A CA certificate called <tt>ca-cert.pem</tt>

  * A client certificate called <tt>client-cert.pem</tt>

  * A client key called <tt>client-key.pem</tt>

First, we configure Heroku with the appropriate environment variables:

```bash
heroku config:add EXTERNAL_DATABASE_CA='ca-cert.pem'
heroku config:add EXTERNAL_DATABASE_CERT='client-cert.pem'
heroku config:add EXTERNAL_DATABASE_KEY='client-key.pem'
```

By default, <tt>heroku_external_db</tt> looks for the files in <tt>config/ca</tt>, so we need to commit them:

```bash
mkdir -p config/ca
cp path/to/ca-cert.pem path/to/client-cert.pem path/to/client-key.pem config/ca
git add config/ca
git commit
```

The rest of the process is the same as in “MySQL with a CA Certificate”.

#### Reactions

<blockquote class="twitter-tweet">
  <p>
    Connect your heroku rails app to an external database -- <a href="http://t.co/12aM8BPh">http://t.co/12aM8BPh</a>
  </p>
  
  <p>
    &mdash; Adrian Teh (@Codespore) <a href="https://twitter.com/Codespore/statuses/224670016073773057">July 16, 2012</a>
  </p>
</blockquote>

<blockquote class="twitter-tweet">
  <p>
    Conectar desde Heroku a una BD externa. <a href="http://t.co/LDIZLueTOK">http://t.co/LDIZLueTOK</a>
  </p>
  
  <p>
    &mdash; mogarick (@mogarick) <a href="https://twitter.com/mogarick/statuses/315728161063202816">March 24, 2013</a>
  </p>
</blockquote>