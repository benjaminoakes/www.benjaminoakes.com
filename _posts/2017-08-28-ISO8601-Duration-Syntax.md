---
layout: post
title:  "ISO8601 Duration Syntax"
date:   2017-08-28
---

This was new to me today:

```ruby
ActiveSupport::Duration.parse('P3Y6M4DT12H30M5S')
# => 3 years, 6 months, 4 days, 12 hours, 30 minutes, and 5 seconds

(3.years + 3.days).iso8601
# => "P3Y3D"
```

Source: [Rails `ActiveSupport::Duration`](https://github.com/rails/rails/commit/04c512da1247a54474cfd8bef17a9e9019c34004)

Other references:

  * [Wikipedia article on ISO8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
  * [W3C reference on duration strings](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string)
  * [How to set itemprop=duration? - StackExchange](https://webmasters.stackexchange.com/questions/50358/how-to-set-itemprop-duration)
