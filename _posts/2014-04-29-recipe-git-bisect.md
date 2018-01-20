---
id: 722
title: 'Recipe: git bisect'
date: 2014-04-29T20:11:20+00:00
author: Ben
layout: post
permalink: /2014/04/29/recipe-git-bisect/
categories:
  - Technology
tags:
  - bisect
  - debugging
  - git
---
_This post originally appeared on <a href="http://engineering.continuity.net/" target="_blank">Continuity&#8217;s engineering blog</a>. I&#8217;ve cross-posted it here for posterity._

Git ships with an awesome, underused utility called `git-bisect`. I had a bug to track down today that already had a spec, so it was a perfect fit. Normally our continuous integration (CI) service would have alerted us earlier, but unfortunately the failure was masked by another problem.

## Ingredients {#ingredients}

  * 1 executable to test a commit
  * 1 known bad commit (often `HEAD`)
  * 1 known good commit

## Directions {#directions}

### Prepare the test executable {#preparethetestexecutable}

In this case, I&#8217;ve called it `private/git-bisect.sh` and filled it with this:

<pre><code class="bash"># Don't forget to `chmod +x` this file.
# You can add more steps here if necessary, e.g. installing dependencies.
rspec spec/services/my_service_spec.rb
</code></pre>

### Find the bad commit {#findthebadcommit}

I&#8217;m going to assume `HEAD` is a bad commit (meaning that the test executable fails).

### Find a good commit {#findagoodcommit}

Go back a reasonable amount of time (e.g. make an educated guess, like 1 month) and find a commit that doesn&#8217;t fail the test executable.

### Bisect! {#bisect}

After you have your good commit, just run a set of commands and `git bisect` will track down the source of the problem for you:

<pre><code class="bash">bad_commit=HEAD
good_commit=fbb3823
git bisect start $bad_commit $good_commit
git bisect run private/git-bisect.sh
</code></pre>

Eventually, it will have bisected back to the source of the problem, producing output like this:

<pre><code class="no-highlight">3f23680fefb5302c780ccc68b5d3006e9f37dd92 is the first bad commit
commit 3f23680fefb5302c780ccc68b5d3006e9f37dd92
Author: He Who Shall Not Be Named &lt;voldemort@example.com&gt;
Date:   Wed Apr 23 11:40:48 2014 -0400

    just change something small, no big deal... honest!

:040000 040000 088559324ff27ec7be6967e8c50934a9837b8f55 e7f89bede815904bb79d5b01807e4e01c8378f14 M      app
bisect run success
</code></pre>

That first line identifies SHA `3f23680fefb5302c780ccc68b5d3006e9f37dd92` as the source of the problem, which was right in my case. Yay for automation!

### Clean up {#cleanup}

Now that I&#8217;m all done, I can:

<pre><code class="bash">git bisect reset
</code></pre>

Git cleans up, and puts me back where I started.

### Investigate {#investigate}

Normally just running `git show $first_bad_commit` will reveal something useful. Tracking down the problem depends on the situation, of course. (Keep in mind that the &#8220;first bad commit&#8221; might not be the one you&#8217;re looking for.)

Good hunting!

## Resources {#resources}

  * `man git-bisect`
  * [Git bisect saves the day](http://blog.boombatower.com/git-bisect-saves-the-day)

:wq