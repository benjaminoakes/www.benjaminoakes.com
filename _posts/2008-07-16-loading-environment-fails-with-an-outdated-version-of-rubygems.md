---
id: 22
title: Loading environment fails with an outdated version of RubyGems
date: 2008-07-16T08:36:06+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=22
permalink: /2008/07/16/loading-environment-fails-with-an-outdated-version-of-rubygems/
categories:
  - Rails
tags:
  - config
  - dependencies
  - environment
  - gem
---
My recent ticket for Rails 2.1 has gotten a fix that has been [committed](http://rails.lighthouseapp.com/projects/8994/tickets/462-loading-environment-fails-with-an-outdated-version-of-rubygems-while-using-config-gem-some_gem#ticket-462-10).

**Update (2013-03-30):** I came across this again today, and decided I should include [the text I wrote back in 2008](https://rails.lighthouseapp.com/projects/8994/tickets/462-loading-environment-fails-with-an-outdated-version-of-rubygems-while-using-config-gem-some_gem), since Lighthouse is no longer actively used.

> I spent quite a bit of today trying to figure out an issue that
  
> was only appearing on our Linux boxes, but not the Mac OS X
  
> machines. This concerns the new gem dependencies feature (i.e.
  
> &#8220;config.gem&#8221; in environment.rb). (More specifically, we are
  
> unpacking into vendor/gems, but that doesn&#8217;t seem related to the
  
> problem.)
> 
> After a lot of debugging, I found out that the issue was
  
> differing versions of the RubyGems utility (&#8220;gem&#8221; on the command
  
> line) and is likely not related to differing operating systems. The
  
> two Linux machines I was testing on had version 0.9.x rather than
  
> the newer 1.1.1 of the Macs. (Mac users may also have this older
  
> version if they have not updated, of course.) An old version of
  
> RubyGems will cause Rails to fail at the very start because the
  
> environment cannot be set up, but only if a &#8220;config.gem&#8221; dependency
  
> is specified.
> 
> To reproduce:
> 
> Try running &#8220;rake test&#8221; (or almost anything else) on a Rails
  
> project which does not use Gem Dependencies on a machine that has
  
> RubyGems < 1.1.1 (not sure of the exact version -- 0.9.4 and
  
> 0.9.2 were causing problems for us.) Verify that this works without
  
> problems. (To check your version, use `gem<br />
--version`.)
> 
> Add _any_ gem dependency, such as:
> 
> <pre><code class="language-ruby">config.gem "httpclient"</code>
</pre>
> 
> You should receive an error such as the following (which is from
  
> running rake test):
> 
> <pre><code class="no-highlight">/usr/lib64/ruby/site_ruby/1.8/rubygems/version.rb:237:in `initialize': undefined method `collect' for nil:NilClass (NoMethodError)
    from /usr/lib64/ruby/site_ruby/1.8/rubygems/version.rb:29:in `new'
    from /usr/lib64/ruby/site_ruby/1.8/rubygems/version.rb:29:in `initialize'
    from /home/oakes/trunk/config/../vendor/rails/railties/lib/rails/gem_dependency.rb:104:in `new'
    from /home/oakes/trunk/config/../vendor/rails/railties/lib/rails/gem_dependency.rb:104:in `specification'
    from /home/oakes/trunk/vendor/rails/activerecord/lib/../../activesupport/lib/active_support/core_ext/symbol.rb:11:in `__send__'
    from /home/oakes/trunk/vendor/rails/activerecord/lib/../../activesupport/lib/active_support/core_ext/symbol.rb:11:in `to_proc'
    from /home/oakes/trunk/config/../vendor/rails/railties/lib/rails/plugin/locator.rb:81:in `map'
    from /home/oakes/trunk/config/../vendor/rails/railties/lib/rails/plugin/locator.rb:81:in `plugins'
     ... 17 levels...
    from /usr/lib64/ruby/gems/1.8/gems/rake-0.8.1/lib/rake/rake_test_loader.rb:5:in `load'
    from /usr/lib64/ruby/gems/1.8/gems/rake-0.8.1/lib/rake/rake_test_loader.rb:5
    from /usr/lib64/ruby/gems/1.8/gems/rake-0.8.1/lib/rake/rake_test_loader.rb:5:in `each'
    from /usr/lib64/ruby/gems/1.8/gems/rake-0.8.1/lib/rake/rake_test_loader.rb:5</code>
</pre>
> 
> Then update RubyGems (`sudo gem update --system`).
  
> Everything should run normally.
> 
> Something in Rails (possibly Rake) should check for the RubyGems
  
> version and warn that it should be updated if it&#8217;s too old. That
  
> is, something like this:
> 
> <pre><code class="language-ruby">REQUIRED_VERSION = '1.1.1'
local_version = %x[gem --version].chomp

if REQUIRED_VERSION != local_version
  puts "You need to update the RubyGems utility to #{REQUIRED_VERSION} using the following"
  puts ""
  puts "    sudo gem update --system"
end</code>
</pre>