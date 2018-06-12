---
layout: post
title: "HTTP referer vs HTTP referrer in Rails and other web development projects"
category: "http"
date: 2018-06-12
---

First, a history lesson: 

> The misspelling of referrer originated in the original proposal by computer scientist Phillip Hallam-Baker to incorporate the field into the HTTP specification. The misspelling was set in stone by the time of its incorporation into the Request for Comments standards document RFC 1945; document co-author Roy Fielding has remarked that neither "referrer" nor the misspelling "referer" were recognized by the standard Unix spell checker of the period. "Referer" has since become a widely used spelling in the industry when discussing HTTP referrers; usage of the misspelling is not universal, though, as the correct spelling "referrer" is used in some web specifications such as the Document Object Model.

Source: [HTTP referer - Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer#Etymology)

...so back in the beginnings of the web, someone made a spelling mistake, and now everyone has to deal with it.  (It feels like if every web server and browser agreed to support both, we could _eventually_ kill off the misspelling.  I'm sure there's been an effort to do this, but clearly it hasn't gotten very far.)

Anyway, if you're a JavaScript developer, you can use `document.referrer` (`document.referer` doesn't even exist).

If you do HTML, it's `rel="noreferrer"` according to [the W3C spec](https://www.w3.org/TR/html5/links.html#link-type-noreferrer).

If you're a Ruby developer, you can use **both** and even _enforce_ `referrer` using Rubocop:

```
Rails/RequestReferer:
  EnforcedStyle: referrer
```

More info here: [Rails cops: referer vs referrer - Issue #3105 - rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop/issues/3105).

