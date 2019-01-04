---
layout: post
title: "Sidekiq Workflows"
category: "ruby"
date: 2019-01-04
---

> While Sidekiq Pro's batches are powerful, only a rather low level API is provided to work with them. Take this example:
>
> https://github.com/mperham/sidekiq/wiki/Really-Complex-Workflows-with-Batches
>
> This is a lot of complex code scattered in various callbacks to enable a straightforward workflow. It is easy making mistakes when writing such code, and it's also hard to debug. This gem provides an API to define a workflow in a single place, abstracting the Batch API away.

Source: [GitHub - easymarketing/sidekiq_workflows: Sidekiq extension providing a workflow API on top of Sidekiq Pro's batches](https://github.com/easymarketing/sidekiq_workflows)

```ruby
workflow = SidekiqWorkflows.build do
  perform(A, 'first param to perform')
  perform(B, 'first', 'second').then do
    perform(C, 'first', 'second', 'third')
    perform([
      {worker: D, payload: ['first']},
      {worker: E, payload: ['first']}
    ]).then do
      perform(F)
    end
  end
end
```

Reminds me a little of promises, which is nice.
