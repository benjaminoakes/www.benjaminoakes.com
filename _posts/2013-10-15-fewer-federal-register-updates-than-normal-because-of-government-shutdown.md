---
id: 349
title: Fewer Federal Register updates than normal because of government shutdown
date: 2013-10-15T16:02:53+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=349
permalink: /2013/10/15/fewer-federal-register-updates-than-normal-because-of-government-shutdown/
categories:
  - Ruby
tags:
  - Federal Register
  - federal_register
  - gem
  - government
  - Ruby
  - shutdown
---
Just as proof that the government shutdown does have an affect, this is a problem we ran into today.

From [the GitHub issue I opened](https://github.com/criticaljuncture/federal_register/issues/6):

> We noticed the Federal Register was giving us fewer results than normal. At first we thought it was a problem with our code&#8230; but it&#8217;s actually because of the government shutdown. There are only updates that &#8220;address imminent threats to the safety of human life or protection of property&#8221; &#8212; which would seem to explain the issue.
> 
> Full text of [a banner on the Federal Register site](https://www.federalregister.gov/):
> 
> > Due to an appropriations lapse, the Office of the Federal Register (OFR) is not updating this site. OFR is publishing documents in the daily Federal Register that are directly related to the performance of governmental functions necessary to address imminent threats to the safety of human life or protection of property. You can view those documents on FDSys. You can read more about OFR services in our blog post.
> 
> I&#8217;m opening a GitHub issue for this &#8220;known issue&#8221; in the hope that it will help another user of the `federal_register`gem. It can/should be closed after this mess is over.