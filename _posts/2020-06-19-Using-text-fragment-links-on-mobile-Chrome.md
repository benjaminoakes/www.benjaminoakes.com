---
layout: post
title: "Using \"text fragment links\" on mobile Chrome"
category: "web"
date: 2020-06-19
---

There's a somewhat new [feature in Chrome that allows you to link directly to text on a page](https://arstechnica.com/gadgets/2020/06/google-pushes-text-fragment-links-with-new-chrome-extension/).  It's basically just a URL fragment that looks like this: `#:~:text=blah`

They've come out with a [Chrome extension](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg/related) to make it easier to create these links.  That's fine on desktop, but what about mobile?  (Though I'd love to have extensions on mobile, they're only supported on Firefox for Android, not Chrome.)

I looked at making a simple [Web Share Target](https://web.dev/web-share-target/) PWA, but I can't find a way to both receive the text _and_ URL it came from to build a link.  (Unfortunately, `document.referrer` is not available.)  Perhaps there's a way, but in the meantime, here's a basic bookmarklet instead:

```
javascript:void(prompt("Copy",`${document.location.href}#:~:text=${encodeURIComponent(getSelection().toString())}`))
```

It's a little awkward to use bookmarklets on mobile Chrome.  There are two ways I'm aware of:

- Bookmark it and then tap it once it autocompletes in the URL bar
- Set it as your "homepage" in Chrome settings.  Then tapping the home icon next to the URL bar will execute that bookmarklet.

Hope this helps someone share a link.  Please leave a comment if so.  :)
