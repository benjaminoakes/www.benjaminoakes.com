---
layout: post
title: "Official AWS Ruby Support for Jets Serverless Framework"
category: ""
date: 2018-12-12
---

> Ever since AWS released official Ruby support for AWS Lambda on Nov 29 at re:Invent, Ive been super excited about switching Jets over to the official AWS version of Ruby. Happy to say that Jets is now on the official AWS Ruby runtime. Knew it was going to be interesting to learn about AWS Lambda Custom Runtimes and Lambda Layers as part of this Jets update.

Source: [Official AWS Ruby Support for Jets Serverless Framework - BoltOps Blog](https://blog.boltops.com/2018/12/12/official-aws-ruby-support-for-jets-serverless-framework)

```
class PostsController < ApplicationController
  def index
    # renders Lambda Proxy structure compatiable with API Gateway
    render json: {hello: "world", action: "index"}
  end

  def show
    id = params[:id] # params available
    # puts goes to the lambda logs
    puts event # raw lambda event available
    render json: {action: "show", id: id}
  end
end
```

```
class HardJob < ApplicationJob
  rate "10 hours" # every 10 hours
  def dig
    puts "done digging"
  end

  cron "0 */12 * * ? *" # every 12 hours
  def lift
    puts "done lifting"
  end
end
```

Source: [Jets Ruby Serverless Framework](http://rubyonjets.com/)

Feels a little like Rails, runs on AWS Lambda.  This is exciting!
