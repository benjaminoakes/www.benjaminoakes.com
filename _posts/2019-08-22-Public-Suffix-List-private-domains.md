---
layout: post
title: "Public Suffix List private domains"
category: "web"
date: 2019-08-22
---

I recently learned that `publicsuffix-ruby` raises an error for some domains:

```
PublicSuffix::DomainNotAllowed:
       `s3.amazonaws.com` is not allowed according to Registry policy
```

Add [`ignore_private: true`](https://github.com/weppos/publicsuffix-ruby/issues/141), and this goes away, but what is it?  They have [some info about private domains on the `publicsuffix-ruby` README](https://github.com/weppos/publicsuffix-ruby#private-domains), but not much.

Turns out there's a [`BEGIN PRIVATE DOMAINS`](https://github.com/weppos/publicsuffix-ruby/blob/master/data/list.txt#L10675) section of their bundled public suffix list.  This comes from the [Mozilla Public Suffix List](https://github.com/publicsuffix/list) which has [slightly more information](https://github.com/publicsuffix/list/wiki/Guidelines):

> In addition, owners of privately-registered domains who themselves issue subdomains to mutually-untrusting parties may wish to be added to the PRIVATE section of the list.

From my reading of it, this is referring to services that give untrusted users a subdomain like "foo.herokuapp.com" or "foo.s3.amazonaws.com".  It's new to me that there's a registry of these, and good to know about.

See also: [Learn more about the Public Suffix List](https://publicsuffix.org/learn/)
