---
layout: post
title: "htmz, a low power tool for html "
category: ""
date: 2024-02-20
---

Minified:

```html
<iframe hidden name=htmz onload="setTimeout(()=>document.querySelector(contentWindow.location.hash||null)?.replaceWith(...contentDocument.body.childNodes))"></iframe>
```

Deminified:

```html
<script>
  function htmz(frame) {
    // Write your extensions here

    // Remove setTimeout to let the browser autoscroll content changes into view
    setTimeout(() =>
      document
        .querySelector(frame.contentWindow.location.hash || null)
        ?.replaceWith(...frame.contentDocument.body.children)
    );
  }
</script>
<iframe hidden name=htmz onload="htmz(this)"></iframe>
```

Source: [htmz](https://leanrada.com/htmz/)

This is powerfully simple.  Used well, this eliminates the need for much more complex solutions.
