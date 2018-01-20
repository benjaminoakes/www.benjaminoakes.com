---
id: 246
title: 'Making Puppet&#8217;s fqdn_rand play nice with Vagrant'
date: 2013-04-25T01:26:19+00:00
author: Ben
layout: post
permalink: /2013/04/25/making-puppets-fqdn_rand-play-nice-with-vagrant/
categories:
  - Linux
  - Open Source
  - Programming
  - Puppet
  - Technology
  - Vagrant
---
We’ve been using [Vagrant](http://vagrantup.com/) more and more, especially for testing our [Puppet](http://www.puppetlabs.com/) code. It can be much more flexible than testing on an existing box, and [Vagrant AWS is really promising](http://www.benjaminoakes.com/2013/04/10/ssh-agent-forwarding-with-vagrant-aws/).

But when we first started using Puppet with Vagrant, Puppet was _freaking out_.

[![Freaked out puppets](http://www.benjaminoakes.com/wp-content/uploads/2013/04/freaked-out-puppets.gif)](http://potterpuppetpals.com/)

We resolved most of the errors quickly, but we couldn’t figure out what to do about this error message:

```
can't convert String into Integer at /tmp/vagrant-puppet/modules-0/puppet/manifests/init.pp:11 on node localhost.localdomain
```

Immediately, we tracked it down to a use of the `fqdn_rand` function.

```ruby
minute => fqdn_rand(60),
```

The easy fix was to cheat and just put in a number by hand.

```ruby
minute => 42, # fqdn_rand(60),
```

That got us by, but it felt _dirty_. We knew the problem was only happening when we tried to use Puppet in conjunction with Vagrant. Since FQDN stands for Fully Qualified Domain Name, it seemed like Puppet needed more information, but the documentation wasn’t too helpful on how to provide that.

I had found out how to set the hostname to provision Vagrant boxes as different nodes, so that was my first attempt.

```ruby
config.vm.hostname = 'vagrant-foo.example.com'
```

Alas, that didn’t fix the issue. What other options were there? Use another function for random numbers?

The trouble is, the only random number function we could find for the Puppet language was [`fqdn_rand`](http://docs.puppetlabs.com/references/latest/function.html#fqdnrand). There wasn’t anything else, and that’s really weird. Something like `mac_rand` (using the MAC address) would make sense, but all we could find was abandoned tickets in the [Puppet Redmine](http://projects.puppetlabs.com/), if anything. (That’s becoming a theme in our experience, actually…)

We went back to doing the dirty solution, and just avoided committing that file. That went on for at least a week.

I got fed up with it again today, and searched some more. It turns out that you can set the FQDN using `puppet.facter`, and there was [a bug with this before Puppet 3](http://projects.puppetlabs.com/issues/8814). We are currently using 3.1.1.

This is what we had to do to get Puppet to stop complaining. Note that this didn’t work for us without **both** the `hostname` and the `fqdn` values set.

**Update (2013-04-26):** It seems like FQDN doesn&#8217;t play as big of a role as I first thought -- the problem seems to go away with just `hostname` set when using Puppet 3.1.1.

```ruby
# File: Vagrantfile
Vagrant.configure('2') do |config|
  config.vm.box      = '[...]'
  config.vm.hostname = 'vagrant-foo.example.com'

  # [...]

  config.vm.provision :puppet, :module_path => %w(modules) do |puppet|
    # fix `fqdn_rand` error
    puppet.facter = { 'fqdn' => config.vm.hostname }
  end
end
```

And now our Puppet is happy again.

![Happy puppet](/wp-content/uploads/2013/04/happy-puppet.png)

(Keep in mind that `Vagrantfile` settings like these might require a `vagrant reload` or a `vagrant destroy --force && vagrant up`.)

Puppet is a little hard to understand sometimes, and this solved a long standing issue for us. It’s worth noting that this could also be used for testing virtual hosts, as mentioned in the [vagrant-puppet README](https://github.com/lucadegasperi/vagrant-puppet).

#### Reactions

<blockquote class="twitter-tweet">
  <p>
    Making Puppet’s fqdn_rand play nice with Vagrant – Benjamin Oakes <a href="http://t.co/AR3KY6kljZ">http://t.co/AR3KY6kljZ</a>
  </p>
  
  <p>
    &mdash; spencer owen (@spencer450) <a href="https://twitter.com/spencer450/statuses/342705216279433216">June 6, 2013</a>
  </p>
</blockquote>
