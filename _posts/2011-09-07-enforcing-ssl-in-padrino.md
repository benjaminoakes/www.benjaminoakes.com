---
title: Enforcing SSL in Padrino
date: 2011-09-07T15:42:30+00:00
author: Ben
layout: post
permalink: /2011/09/07/enforcing-ssl-in-padrino/
categories:
  - Uncategorized
---
We&#8217;re trying `rack-ssl-enforcer` out on our Padrino-based project. It seems to work when configuring like so:

```ruby

# File: app/app.rb
class MyApp < Padrino::Application
  # [...]
  configure :production do
    require 'rack-ssl-enforcer'
    use Rack::SslEnforcer
  end
end
```

We're using it with Padrino with some success. It's great that such a common need is really simple to set up. However, even after looking through the docs further, I'm surprised that I can request over HTTP and I don't get redirected to HTTPS. I've yet to figure out the issue, but it seems to meet our needs just fine otherwise.

This is in response to Dan Mayer's article [Force all Sinatra traffic to https](http://www.mayerdan.com/2010/08/force_all_sinatra_traffic_to_h.php). I had started to comment, but his blog errored-out when submitting. Thanks for posting it, Dan!