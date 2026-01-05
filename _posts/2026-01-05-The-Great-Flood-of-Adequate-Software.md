---
layout: post
title: "The Great Flood of Adequate Software"
category: ""
date: 2026-01-05
---

>Last week, I saw three different tools for cramming entire codebases into a single text file. Nobody was asking for this. But sometimes you just need to feed your whole project to Claude and think "you know what would make this easier?"

Source: [The Great Flood of Adequate Software](https://worksonmymachine.ai/p/the-great-flood-of-adequate-software?publication_id=286732&post_id=168009785)

You know, it's funny.  I've found AI generated code to be needlessly verbose more often than not.  Even the above example is probably just a `find` command like this:

```bash
find . -name '*.rb' -type f -exec awk 'FNR==1{print "--- " FILENAME " ---"} 1' {} \; > out.txt
```

That's half AI generated and half human generated.  And that's the point.  I know these tools and what I can do with them.  It's often still faster to know what I'm doing.  On the other hand, If I asked any AI for something like this in English, it would probably spit out a 200 line Python program that does a bunch of error handling and tree traversal.  And is that okay?  Sometimes.  Very often it's just "okay, good enough" (adequate).  However, it can lead to massive codebases if not done well.  So, there's a line.  And you need to have experience to know where the line is.

So yeah, I've generated tons of adequate code and just said "meh" and gone with it.  And other times?  Well, when it's important it requires more attention because the AI just did something very stupid.

It's a great thing that it's easy to generate lots of code that would have taken weeks in years past.  That said, lots of code is often not the right solution.  If you lean on the AI for everything without understanding, it's going to take you down the wrong path eventually.  I'm wary of anyone who says otherwise.
