---
title: Google announces SPDY’s coming demise as HTTP/2 approaches
date: 2015-02-13T03:23:31+00:00
author: Ben
layout: post
permalink: /2015/02/13/google-announces-spdys-coming-demise-as-http2-approaches/
categories:
  - Web
tags:
  - http2
  - multiplexing
  - spdy
  - tls
---
[Google announces SPDY’s coming demise as HTTP/2 approaches - Ars Technica](http://arstechnica.com/information-technology/2015/02/google-announces-spdys-coming-demise-as-http2-approaches/).
  
[Chromium Blog: Hello HTTP/2, Goodbye SPDY](http://blog.chromium.org/2015/02/hello-http2-goodbye-spdy-http-is_9.html)

From the Ars article:

> Today the company announced that it would soon be removing SPDY support from Chrome. That&#8217;s because the Internet Engineering Task Force (IETF) has been working to update HTTP to produce HTTP/2, an updated revision of a protocol that has not seen any major changes since its introduction in the early 1990s. [...] To reduce latency, it included support for multiplexing—making multiple requests and responses over a single connection, with prioritization for different requests—and for security, it makes the use of TLS compulsory.

Multiplexing and compression just make sense... but compulsory TLS? That&#8217;s quite a hurdle for the entire web to jump over. I&#8217;ve seen some arguments that there might be free certificates, but I wonder how that would be managed. Without having read much of the [working draft](https://tools.ietf.org/html/draft-ietf-httpbis-http2-16#section-9.2.1), a natural question is how potential vulnerabilities in TLS would be handled over the next 15 years, especially considering recently discovered issues in SSL (POODLE, namely).

Regardless, I guess a server could always fall back to HTTP/1.1. It&#8217;s gotten us this far.