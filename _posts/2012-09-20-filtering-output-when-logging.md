---
id: 160
title: Filtering output when logging
date: 2012-09-20T20:31:06+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=160
permalink: /2012/09/20/filtering-output-when-logging/
categories:
  - Open Source
  - Programming
  - Rails
  - Ruby
  - Snippets
---
I needed to filter some output when logging. Unfortunately, the filtering built into Rails was no help because the logging wasn&#8217;t coming from parameters. It also wasn&#8217;t coming from a `Hash`. (To filter a `Hash`, you can also use `ActionDispatch::Http::ParameterFilter`.) Instead, it was coming from a value inside another object.

Although this wasn&#8217;t my final solution, I still think it could be useful to someone:

<pre><code class="language-ruby"># License: MIT, GPLv2
module InspectionHelper
  def self.filter(object)
    def object.ai(*)
      '[AWESOME-PRINT-FILTERED]'
    end

    def object.inspect
      '[INSPECT-FILTERED]'
    end
  end
end
</code></pre>

This will filter output from both `inspect` and the equivalent in `awesome_print` (which was the pain point for me earlier today).

Usage:

<pre><code class="language-ruby">data = []
InspectionHelper.filter(data)
data.inspect # => '[INSPECT-FILTERED]'

# Or nested objects:
h = { something_important: Object.new }
InspectionHelper.filter(h[:something_important])
h.inspect # => {:something_important=>[INSPECT-FILTERED]}
</code></pre>