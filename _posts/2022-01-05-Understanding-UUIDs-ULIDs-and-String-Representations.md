---
layout: post
title: "Understanding UUIDs, ULIDs and String Representations"
category: "databases"
date: 2022-01-05
---

> So given the two major problems of UUIDs, which are 1) collision possibilities across the history of all generated IDs, and 2) complete loss of locality, can we do better? Yes, we can!
>
> Instead of using all the 128 bits for randomness, what if we use the first 48 bits for a timestamp? 48 bits is enough to represent a millisecond-precision Unix timestamp (the number of milliseconds since an epoch at the beginning of Jan 1, 1970) till the year 10889 AD.

Source: [Understanding UUIDs, ULIDs and String Representations](https://sudhir.io/uuids-ulids)

I've looked at [ULIDs in Ruby](https://github.com/kachick/ruby-ulid) before but totally forgot about the sortable/indexable nature of ULIDs vs UUIDs.  UUIDs have almost no contextual information, so ULIDs could be really nice in some circumstances.
