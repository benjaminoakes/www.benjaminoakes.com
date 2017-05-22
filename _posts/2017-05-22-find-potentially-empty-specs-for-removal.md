---
layout: post
title:  "Find potentially empty specs for removal"
date:   2017-05-22
---

This command finds (potentially) empty rspec tests that are only adding to the list of files you have to load when you run your test suite.

    git grep --files-without-match '\<it\>' spec/
    
This isn't perfect, but it gives a list you can pare down and then `git rm`.
