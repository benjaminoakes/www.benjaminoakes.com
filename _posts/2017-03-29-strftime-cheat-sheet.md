---
title: strftime cheat sheet
date: 2017-03-29T21:18:28+00:00
author: Ben
layout: post
permalink: /2017/03/29/strftime-cheat-sheet/
categories:
  - Programming
tags:
  - cheat sheet
  - formatting
  - reference
  - strftime
  - time
---
>     strftime:
>         %a – The abbreviated weekday name (``Sun’‘)
>         %A – The full weekday name (``Sunday’‘)
>         %b – The abbreviated month name (``Jan’‘)
>         %B – The full month name (``January’‘)
>         %c – The preferred local date and time representation
>         %d – Day of the month (01..31)
>         %H – Hour of the day, 24-hour clock (00..23)
>         %I – Hour of the day, 12-hour clock (01..12)
>         %j – Day of the year (001..366)
>         %m – Month of the year (01..12)
>         %M – Minute of the hour (00..59)
>         %p – Meridian indicator (``AM’’ or ``PM’‘)
>         %S – Second of the minute (00..60)
>         %U – Week number of the current year,
>             starting with the first Sunday as the first
>             day of the first week (00..53)
>         %W – Week number of the current year,
>             starting with the first Monday as the first
>             day of the first week (00..53)
>         %w – Day of the week (Sunday is 0, 0..6)
>         %x – Preferred representation for the date alone, no time
>         %X – Preferred representation for the time alone, no date
>         %y – Year without a century (00..99)
>         %Y – Year with century
>         %Z – Time zone name
>         % – Literal ``’’ character

Source: the `cheat` gem ([relevant blog post](http://errtheblog.com/posts/21-cheat))

Cheat has mostly gone offline, but I still refer to this cheat sheet all the time, years and years later. Perhaps that means that `strftime` has terrible syntax, but that doesn&#8217;t stop it from being ubiquitous.