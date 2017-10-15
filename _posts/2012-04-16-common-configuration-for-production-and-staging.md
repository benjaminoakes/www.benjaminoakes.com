---
id: 145
title: Common configuration for production and staging
date: 2012-04-16T15:21:07+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=145
permalink: /2012/04/16/common-configuration-for-production-and-staging/
categories:
  - Rails
  - Ruby
---
Like many web apps, we typically have a need for a staging environment to test before we deploy to production. Combined with continuous deployment, it becomes much quicker and easier to find issues that would affect production by testing in this production-like environment.

This staging environment needs to be as close as possible to production; ideally the only things that are different are the data and some integration points. Having different behavior based on environment makes realistic testing difficult. Different configuration based on environment can also be problematic. In many ways, staging can be thought of as being based on production&#8230; but how does that work in pratice?

Rails doesn&#8217;t provide a built in idiom for a staging environment (the default environments are just &#8220;development&#8221;, &#8220;test&#8221;, and &#8220;production&#8221;), so many people have come up with their own way of managing the staging configuration problem. Many times the reality is that `config/environments/staging.rb` is a copied and pasted version of `config/environments/production.rb` along with some minor adjustments.

That&#8217;s ugly.

Here&#8217;s a more elegant strategy that we&#8217;re trying out:

    
    # File: config/environments/common.rb
    OurApp::Application.configure do
      # Common configuration goes here
    
      # Example:
      config.foo_bar = false
    end
    
    # File: config/environments/staging.rb
    require_relative './common'
    
    OurApp::Application.configure do
      # Any staging-specific configuration goes here.
    end
    
    # File: config/environments/production.rb
    require_relative './common'
    
    OurApp::Application.configure do
      # Any production-specific configuration goes here.
    end
    

This allows us to set a baseline &#8220;production&#8221; configuration, but still override settings as necessary. It seems to reduce the amount of manual maintenance (&#8220;syncing&#8221;) of enviroments in the way we were hoping too, so we don&#8217;t accidentally let a configuration change go untested until a production deployment.

(Technical info: this was written against Ruby 1.9.2p180 and Rails 3.2.3.)