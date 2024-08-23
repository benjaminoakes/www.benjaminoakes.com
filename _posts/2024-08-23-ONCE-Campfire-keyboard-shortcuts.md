---
layout: post
title: "ONCE Campfire keyboard shortcuts"
category: ""
date: 2024-08-23
---

I'm trying to understand Campfire keyboard shortcuts.  I know they use [Trix](https://trix-editor.org/), but the one in Campfire has fewer keyboard shortcuts than I would have expected.  

I looked into this.  It seems `data-trix-key` is how keyboard shortcuts are configured.

```javascript
document.querySelectorAll('[data-trix-key]') 
```

```
NodeList(5) [ button.trix-button.trix-button--icon.trix-button--icon-bold, button.trix-button.trix-button--icon.trix-button--icon-italic, button.trix-button.trix-button--icon.trix-button--icon-link, button.trix-button.trix-button--icon.trix-button--icon-undo, button.trix-button.trix-button--icon.trix-button--icon-redo ]
```

So Bold, Italic, Link, Undo, and Redo are all, it seems.

If someone learns more about how to use keyboard shortcuts for any part of Campfire, that would be nice to know about. 🙂
