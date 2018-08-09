---
layout: post
title: "MessagePack: It's like JSON. but fast and small."
category: "serialization"
date: 2018-08-09
---

> MessagePack is an efficient binary serialization format. It lets you exchange data among multiple languages like JSON. But it's faster and smaller. Small integers are encoded into a single byte, and typical short strings require only one extra byte in addition to the strings themselves.

Source: [MessagePack: It's like JSON. but fast and small.](https://msgpack.org/)

Much faster.  Also supported in Redis:

> Redis scripting has support for MessagePack because it is a fast and compact serialization format with a simple to implement specification. I liked it so much that I implemented a MessagePack C extension for Lua just to include it into Redis.

&mdash; Salvatore Sanfilippo, creator of Redis
