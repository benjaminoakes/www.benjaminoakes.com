---
id: 234
title: SSH Agent Forwarding with Vagrant AWS
date: 2013-04-10T20:24:37+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=234
permalink: /2013/04/10/ssh-agent-forwarding-with-vagrant-aws/
categories:
  - Debugging
  - GitHub
  - Linux
  - Open Source
  - Programming
  - Sharing
---
The in-progress [Vagrant AWS](https://github.com/mitchellh/vagrant-aws) has a lot of promise, especially for devops. The ability to test your Puppet or Chef scripts on an EC2 instance using Vagrant is very tempting. Unfortunately, it&#8217;s not _yet_ quite stable enough to rely on, in my experience. Some errors seem to happen sporadically. Most are related to `ssh`, although running `ssh` manually works fine (either `vagrant ssh` or `ssh user@host`).

Sometimes, something as simple as `mkdir` fails without reason:

<pre><code class="no-highlight">The following SSH command responded with a non-zero exit status.
Vagrant assumes that this means the command failed!

mkdir -p '/vagrant'
</code></pre>

Other times, `rsync` completes, but then it immediately terminates the instance:

<pre><code class="no-highlight">[default] Rsyncing folder: /home/ben/aws-sandbox/ => /vagrant
[default] Terminating the instance...
</code></pre>

I&#8217;m still hopeful that it can be useful to us in the future. Like I said, there&#8217;s a lot of promise in this young project.

At any rate, we took some time to research how to get SSH agent forwarding working, which is valuable for us when remote pairing. We were getting stuck with errors like this:

<pre><code class="no-highlight">Permission denied (publickey,gssapi-keyex,gssapi-with-mic).</code></pre>

It turns out that `vagrant` itself ignores anything but identity files, which was key to getting agent forwarding to work. This can be inspected using `vagrant ssh-config`

It turns out that `lib/vagrant/util/ssh.rb` can be modified like so:

<pre><code class="no-highlight">--- a/lib/vagrant/util/ssh.rb
+++ b/lib/vagrant/util/ssh.rb
@@ -108,7 +108,7 @@ module Vagrant
         # IdentitiesOnly option. Also, we don't enable it in plain mode so
         # that SSH properly searches our identities and tries to do it itself.
         if !Platform.solaris? && !plain_mode
-          command_options += ["-o", "IdentitiesOnly=yes"]
+          command_options += ["-o", "IdentitiesOnly=no"]
         end
 
         # If we're not in plain mode, attach the private key path.
</code></pre>

There&#8217;s a related change that can be made to make `vagrant ssh-config` match, but it seems to be cosmetic:

<pre><code class="no-highlight">--- a/templates/commands/ssh_config/config.erb
+++ b/templates/commands/ssh_config/config.erb
@@ -6,7 +6,7 @@ Host &lt;%= host_key %>
   StrictHostKeyChecking no
   PasswordAuthentication no
   IdentityFile "&lt;%= private_key_path %>"
-  IdentitiesOnly yes
+  IdentitiesOnly no
   LogLevel FATAL
 &lt;% if forward_agent -%>
   ForwardAgent yes
</code></pre>

That was enough to get our SSH agent forwarding to work. These changes make sense in the context of AWS, but probably not in Vagrant at large. I&#8217;m tempted to make a pull request, but the above changes are a little half baked -- and `vagrant-aws` still needs some fine tuning before the change can **really** be tested.