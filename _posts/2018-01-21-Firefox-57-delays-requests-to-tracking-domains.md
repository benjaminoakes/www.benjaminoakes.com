---
layout: post
title:  "Firefox 57 delays requests to tracking domains"
date:   2018-01-21
---

> This has a positive effect on page load performance as we save some of the network bandwidth, I/O and CPU for loading and processing of images and scripts running on the site so the web page is complete and ready sooner.
>
> Tracking scripts are not disabled, we only delay their load for few seconds when we can.  Requests are kept on hold only while there are site sub-resources still loading and only up to about 6 seconds.  The delay is engaged only for scripts added dynamically or as async.  Tracking images and XHRs are always delayed, as well as any request made by a tracking script.  This is legal according all HTML specifications and it’s assumed that well built sites will not be affected regarding functionality.

Source: [Firefox 57 delays requests to tracking domains - mayhemer's blog](https://www.janbambas.cz/firefox-57-delays-requests-tracking-domains/)

Seems like a decent compromise.
