---
layout: post
title: "Use Helix to write Native Ruby Extensions using Rust"
category: "Ruby"
date: 2019-02-01
---

```rust
#[macro_use]
extern crate helix;

ruby! {
    class Console {
        def log(string: &str) {
            println!("LOG: {:?}", string);
        }
    }
}
```

```ruby
require "console"
Console.log("I'm in your Rust")
# => LOG: "I'm in your Rust"
```

Source: [Helix: Native Ruby Extensions Without Fear ](http://usehelix.com/)
