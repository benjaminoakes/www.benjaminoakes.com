---
title: Maid v0.4-series update
date: 2013-11-06T04:53:05+00:00
author: Ben
layout: post
permalink: /2013/11/06/maid-v0-4-series-update/
categories:
  - Maid
  - Ruby
tags:
  - ChangeLog
  - maid
  - release
  - Ruby
---
After the OS X 10.9 release, I got some energy to release Maid v0.4.0, mostly because it finally made it possible to drop Ruby 1.8.7 compatibility while still letting casual Ruby users on OS X use Maid.  Needless to say, I&#8217;m happy OS X 10.9 has Ruby 2.0 included.  I had honestly gotten stuck on Ruby 1.8.7 compatibility, since so many gems have been dropping support.  It is officially end-of-life, after all.

In case you missed it, here&#8217;s some details from the ChangeLog:

  * Stats! { &#8216;collaborators&#8217; => 12, &#8216;downloads&#8217; => 8227, &#8216;forks&#8217; => 40, &#8216;open\_issues&#8217; => 29, &#8216;closed\_issues&#8217; => 83, &#8216;stars&#8217; => 713, &#8216;users\_sharing\_rules&#8217; => 28 }
  * New utility methods: &#8220;checksum\_of&#8221;, &#8220;escape\_glob&#8221;, &#8220;files&#8221;
  * New duplicate detection methods: &#8220;dupes\_in&#8221;, &#8220;newest\_dupes\_in&#8221;, &#8220;verbose\_dupes_in&#8221;
  * New filetype methods: &#8220;media\_type&#8221;, &#8220;mime\_type&#8221;, &#8220;spotlight\_content\_types&#8221;, &#8220;where\_content\_type&#8221;
  * Ended official support for Ruby 1.8.7 and 1.9.2 (Closes: [#108](https://github.com/benjaminoakes/maid/issues/108 "Drop support for 1.8.7"))
  * Update to rubyzip 1.0.0 (Closes: [#109](https://github.com/benjaminoakes/maid/issues/109 "Update to rubyzip 1.0.0"))
  * Remove &#8220;ohai&#8221; dependency which required native extensions (Closes: [#112](https://github.com/benjaminoakes/maid/issues/112 "Remove ohai dependency"))
  * Updated other dependencies (Closes: [#111](https://github.com/benjaminoakes/maid/issues/111 "Update dependencies"))
  * Mu Ye: Require &#8220;--force&#8221; option to cause real cleaning to take place (Closes: [#78](https://github.com/benjaminoakes/maid/issues/78 "Require option to cause real cleaning to take place"))
  * Graham Siener: Add UTF-8 support for &#8220;zipfile_contents&#8221; tool (Closes: [#35](https://github.com/benjaminoakes/maid/issues/35 "OSX zipfile extraction tool fails on zip files with UTF8 characters"))
  * Justin Hileman: Add ability to list duplicate files (Closes: [#15](https://github.com/benjaminoakes/maid/issues/15 "Add ability to list duplicate files"))
  * Mikael Hultgren: Rotate log file
  * John Colvin: Add filetype detection and filtering (Closes: [#51](https://github.com/benjaminoakes/maid/issues/51 "Add filetype detection"))
  * Mu Ye: Improve command line spec coverage (Closes: [#97](https://github.com/benjaminoakes/maid/pull/97 "Add spec for showing version"))
  * Bradley Smith: Add &#8220;locate&#8221; support on Ubuntu (Closes: [#67](https://github.com/benjaminoakes/maid/issues/67 "Add locate support on Ubuntu"))
  * Vladimir Agafonkin: Add &#8220;escape_glob&#8221; method for escaping brackets in paths that will be passed to &#8220;dir&#8221; (Closes: [#104](https://github.com/benjaminoakes/maid/pull/104 "Add escape_glob method for escaping brackets in paths that will be passed to dir"))
  * Changed from ArgumentError to NotImplementedError when a command is unsupported on the host OS.

I&#8217;ve also made a few &#8220;patch&#8221; releases, after being notified of new dependency versions and testing their compatibility.

If you&#8217;re just getting started with Maid, the [README](https://github.com/benjaminoakes/maid) is the best place to start looking.  Enjoy!