---
layout: post
title: "Soft Deletion Probably Isn't Worth It"
category: "databases"
date: 2022-07-20
---

>Once again, soft deletion is theoretically a hedge against accidental data loss. As a last argument against it, I'd ask you to consider, realistically, whether undeletion is something thats ever actually done.

Source: [Soft Deletion Probably Isn't Worth It -- brandur.org](https://brandur.org/soft-deletion)

This is a well-reasoned piece that, unfortunately, probably won't change the status quo.  Soft-deletion just feels safe. It's psychological, not technical. But yes, I agree, a separate table makes a ton of sense. 
