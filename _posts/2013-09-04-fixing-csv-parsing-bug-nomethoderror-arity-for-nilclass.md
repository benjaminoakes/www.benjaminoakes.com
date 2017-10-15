---
id: 304
title: Fixing CSV parsing bug (NoMethodError arity for NilClass)
date: 2013-09-04T00:47:56+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=304
permalink: /2013/09/04/fixing-csv-parsing-bug-nomethoderror-arity-for-nilclass/
categories:
  - Ruby
tags:
  - arity
  - converters
  - CSV
  - FasterCSV
  - NilClass
  - NoMethodError
  - require
---
We were working with some pure-Ruby CSV parsing code today and got a confusing error.

<pre><code class="no-highlight">NoMethodError:
 undefined method `arity' for nil:NilClass
</code></pre>

We weren&#8217;t doing anything that looked special, just something like this:

<pre><code class="ruby">CSV.parse(string, :converters =&gt; [:strip])
</code></pre>

We narrowed it down to the point that we knew that just <code  class="ruby">CSV.parse(string)</code> worked, so we knew it must have to do with the <code class="ruby">:converters</code> option. Not knowing the API backwards and forwards, I had thought that <code class="ruby">:strip</code> was built into Ruby&#8217;s <code class="ruby">CSV</code> library. It turns out that this error was happening because we hadn&#8217;t required our custom converter definition, which was in another file. It was something like this:

<pre><code class="ruby">CSV::Converters[:strip] = lambda { |s| s.strip rescue s }
</code></pre>

After making that definition available, our <code  class="ruby">NoMethodError</code> went away.

This happened at least in part because we were writing [fast specs](http://www.benjaminoakes.com/2013/04/05/fast-specs/), which needs all the necessary files to be required. However, we did end up refactoring our implementation as a result, since it was not obvious that the custom CSV converters even existed when the code was used within Rails.

Versions: Ruby 2.0.0, and the included <code  class="ruby">CSV</code> library (based on <code  class="ruby">FasterCSV</code>).