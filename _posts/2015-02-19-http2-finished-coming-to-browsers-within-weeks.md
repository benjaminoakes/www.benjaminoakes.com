---
id: 627
title: HTTP/2 finished, coming to browsers within weeks
date: 2015-02-19T02:35:28+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=627
permalink: /2015/02/19/http2-finished-coming-to-browsers-within-weeks/
categories:
  - Web
tags:
  - encryption
  - http
  - http2
  - standards
  - tls
---
[HTTP/2 finished, coming to browsers within weeks](http://arstechnica.com/information-technology/2015/02/http2-finished-coming-to-browsers-within-weeks/).

> HTTP/2 is based in large part on Google&#8217;s SPDY. SPDY did some things that HTTP/2 does not. It required the use of TLS (Transport Layer Security) to enhance privacy and security. HTTP/2 makes this optional; it can operate over TLS or over plain TCP. Some vendors, however, have said that their implementations will only support HTTP/2 over encrypted TLS connections to regain these privacy benefits.

Okay, so some browsers will require TLS and others won&#8217;t? [No wonder I&#8217;m confused](http://www.benjaminoakes.com/2015/02/13/google-announces-spdys-coming-demise-as-http2-approaches/ "Google announces SPDY’s coming demise as HTTP/2 approaches"). If I were to guess, I&#8217;d imagine we&#8217;ll see most browsers support _unencrypted_ HTTP/2 in a few years, provided enough of them support unencrypted connections initially. (Who would want to be the vendor of the only browser that&#8217;s forced to use the slower HTTP/1.1 on some sites?)

That&#8217;s not to say TLS is a bad idea. I just don&#8217;t think this requirement will stand the test of time given that it&#8217;s already giving way.