---
layout: post
title: "Rails standardized error reporting interface"
category: "ruby"
date: 2021-10-15
---

> A very common pattern when dealing with exceptions is to report them asynchronously to the developer and continue exception with some fallback. [...]  I believe there's an opportunity for Rails to provide a generic interface to report errors, with an adapter API to allow using the service of your choice.

Source: [Rails standardized error reporting interface](https://github.com/rails/rails/issues/43472)

Most Rails apps include a layer of indirection like the below, so this is a great idea.

```ruby
begin
  do_something
rescue SomethingIsBroken => error
  MyErrorReportingService.notify(error)
  some_fallback_code_or_value
end
```
