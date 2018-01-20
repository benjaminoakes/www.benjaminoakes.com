---
title: relative_time_ago in Padrino should be time_ago_in_words
date: 2011-09-14T13:01:19+00:00
author: Ben
layout: post
permalink: /2011/09/14/relative_time_ago-in-padrino-should-be-time_ago_in_words/
categories:
  - Ruby
tags:
  - date
  - helpers
  - Padrino
  - Ruby
  - time
---
You might find `relative_time_ago` referenced in the [Padrino Guides](http://www.padrinorb.com/guides/home) or [Padrino Helpers RDocs](http://www.padrinorb.com/api/padrino-helpers/README_rdoc.html), but that doesn&#8217;t exist.

According to the [Application Helpers guides](http://www.padrinorb.com/guides/application-helpers), you probably want `distance_of_time_in_words` or `time_ago_in_words`.

Example:

```haml
%p
  = time_ago_in_words(my_date)
  ago
```

For reasons I don&#8217;t quite understand, this documentation is also **incorrect**:

```ruby
time_ago_in_words(2.days.ago) # => "2 days ago"
```

The actual behavior is:

```ruby
time_ago_in_words(2.days.ago) # => "2 days"
```

I&#8217;m planning to move some of this into the [padrino-framework](https://github.com/padrino/padrino-framework) project directly. Incorrect documentation is worse than no documentation; maybe it will be more accurate if kept in the code. :)