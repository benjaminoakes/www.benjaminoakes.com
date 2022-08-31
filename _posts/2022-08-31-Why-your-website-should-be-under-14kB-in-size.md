---
layout: post
title: "Why your website should be under 14kB in size"
category: "web"
date: 2022-08-31
---

> What is surprising is that a 14kB page can load much faster than a 15kB page -- maybe 612ms faster -- while the difference between a 15kB and a 16kB page is trivial.

Source: [Why your website should be under 14kB in size](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/)

Also [this awesome comment about ants from Reddit](https://www.reddit.com/r/programming/comments/wx69fs/comment/ilplkgs/?utm_source=reddit&utm_medium=web2x&context=3):

> The slow-start/scaling window algorithm is pretty fascinating. It's a pretty efficient way to scale up performance gradually toward a near-optimal point, before failing and starting over again.
> 
> There's a species of ant that exhibits a similar emergent behaviour, whereby the ants have large antennae and their colonies have a limited number of limited sized exit points. The colony slowly releases ants out of all exit points randomly (it's actually influenced by some other factors, but it's a mostly stochastic distribution). The rate of ants exiting the colony increases over time until it gets too high for each small exit to support, drops to almost nothing, then starts over again, gradually ramping up.
> 
> It's implemented by ants with very simple behaviours that together result in the higher level complex behaviour. Individual ants regulate which exit they use based on how many antennae collisions they incur when exiting the colony. If it gets too high trying to get out exit A, they'll change course and use exit B instead.
> 
> This stops the colony favouring a single strong route to food too highly, to the point where other routes and wider exploratory behaviour suffers detrimentally, and is a pretty efficient way for the colony to maximise its utility of all available food sources.
> 
> TCP was designed in the 70s and independently arrived at an implementation that was very similar, and a paper in the early 2000s confirmed that it's almost exactly as optimal as ant colony release behaviours. It also identified that the equivalent of the TCP Global Sync problem existed in colony behaviour (where all colony exits reach capacity at the same time, thereby causing all gathering to cease at once) and had a protection mechanism very similar to Random Early Detection to combat it (by virtue of ants sometimes randomly choosing to stop and 'block' exits, thereby causing an artificial increase in antennae collisions and causing an exit to prematurely stop being used, thereby ensuring Global Sync doesn't happen).
