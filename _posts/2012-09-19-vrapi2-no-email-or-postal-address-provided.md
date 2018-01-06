---
id: 158
title: VRAPI2.NO_EMAIL_OR_POSTAL_ADDRESS_PROVIDED
date: 2012-09-19T15:39:25+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=158
permalink: /2012/09/19/vrapi2-no-email-or-postal-address-provided/
categories:
  - API
  - Programming
---
I ran into an error with the VerticalResponse API today, and to my surprise there were no results when searching on Google, Bing, or DuckDuckGo. Not even in the [VerticalResponse documentation](http://developers.verticalresponse.com/)!

[<img src="http://www.benjaminoakes.com/wp-content/uploads/2012/09/Screen-shot-2012-09-19-at-10.31.20-AM-300x132.png" alt="Your search - VRAPI2.NO_EMAIL_OR_POSTAL_ADDRESS_PROVIDED - did not match any documents." title="No results for VRAPI2" width="300" height="132" class="preview aligncenter size-medium wp-image-159" srcset="https://www.benjaminoakes.com/wp-content/uploads/2012/09/Screen-shot-2012-09-19-at-10.31.20-AM-300x132.png 300w, https://www.benjaminoakes.com/wp-content/uploads/2012/09/Screen-shot-2012-09-19-at-10.31.20-AM.png 889w" sizes="(max-width: 300px) 100vw, 300px" />](http://www.benjaminoakes.com/wp-content/uploads/2012/09/Screen-shot-2012-09-19-at-10.31.20-AM.png)

The error was:

<pre><code class="no-highlight">A general API error occurred: "VRAPI2.NO_EMAIL_OR_POSTAL_ADDRESS_PROVIDED" - "no email or postal address was provided, but at least one is required"</code></pre>

I tracked it down to a call to [`editListMember`](http://developers.verticalresponse.com/api/soap/methods/lists/editlistmember/), which I guessed didn&#8217;t include the `email_address` in `member_data`. After adding it, the error message has gone away.

At any rate, there will now be a result if someone else searches for the error message. :)</p>