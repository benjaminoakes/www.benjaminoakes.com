---
layout: post
title: "Rollout: Fast feature flags based on Redis"
category: "ruby"
date: 2021-05-04
---

Source: [fetlife/rollout: Feature flippers.](https://github.com/fetlife/rollout)

Definitely an option worth considering over a database table.

There are quite a few options, like:

```ruby
$rollout.activate_group(:chat, :all)
$rollout.activate_group(:chat, :admins)
$rollout.activate_user(:chat, @user)
$rollout.activate_percentage(:chat, 20)
```

One question I have, though: [Is there a drop-in Rails UI for Rollout feature toggles?](https://stackoverflow.com/questions/67387996/is-there-a-drop-in-rails-ui-for-rollout-feature-toggles)
