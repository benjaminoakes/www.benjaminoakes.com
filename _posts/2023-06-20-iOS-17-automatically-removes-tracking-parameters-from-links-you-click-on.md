---
layout: post
title: "iOS 17 automatically removes tracking parameters from links you click on"
category: "web"
date: 2023-06-20
---

> Adding tracking parameters to links is one way advertisers and analytics firms try to track user activity across websites. Rather than storing third-party cookies, a tracking identifier is simply added to the end of the page URL. This would circumvent Safari's standard intelligent tracking prevention features that block cross-site cookies and other methods of session storage.  Navigating to that URL allows an analytics or advertising service at the destination to read the URL, extract those same unique parameters, and associate it with their backend user profile to serve personalized ads.  Apple is attempting to crack down on this behavior across its operating systems this year. Safari will automatically detect which parts of the URL are identifying, and remove only those parts, leaving the rest of the URL intact so you still get to the web page you intended to visit.  This process happens transparently during browser navigation in **Safari Private Browsing mode**, and links that the user clicks on from Mail and Messages app.

Source: [iOS 17 automatically removes tracking parameters from links you click on](https://9to5mac.com/2023/06/08/ios-17-link-tracking-protection/)

(emphasis added)

This makes sense for Apple, but I suspect it's going to lead to lots of bugs.  I know this partially because I sometimes manually remove the same link tracking parameters myself and I run into some odd situations.  Also, I suspect if this becomes a common practice, companies will respond by making it impossible to remove tracking parameters, for example by combining them and signing them.  Ultimately, this may make things worse without any real way to go back.

And also it seems that Apple has a solution to sell, so I'm skeptical of motives:

> As a partial mitigation, Apple is enabling an alternative way for advertisers to measure campaign success, with Private Click Measurement ad attribution now available in Safari Private Browsing mode. Private Click Measurement allows advertisers to track ad campaign conversion metrics, but does not reveal individual user activity.
