---
layout: post
title: "Taking Rails to the next level with Hotwire"
category: "rails"
date: 2022-01-30
---

> Since Turbo Stream updates initiated by broadcasts are generated on the server side, they are not going to have any global variables available to them. This means you shouldn't use variables like current_user (from Devise) or rails CurrentAttributes there. Sessions are also not available on those partials. See this post on Hotwire and Devise for more on how to make those variables work.

Source: [Taking Rails to the next level with Hotwire](https://blog.cloud66.com/taking-rails-to-the-next-level-with-hotwire/)

I didn't realize this about streams.   Follow up post: [Making Hotwire and Devise play nicely](https://blog.cloud66.com/making-hotwire-and-devise-play-nicely-with-viewcomponents/)
