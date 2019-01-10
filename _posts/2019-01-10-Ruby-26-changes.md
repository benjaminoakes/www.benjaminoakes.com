---
layout: post
title: "Ruby 2.6 changes"
category: "Ruby"
date: 2019-01-10
---

> This site is dedicated to changes in the language, not the implementation, therefore the list below lacks mentions of lots of important optimization introduced in 2.6, including the whole JIT big thing. Thats not because they are not important, just because this sites goals are different.

Source: [Ruby 2.6 changes - Ruby Changes](https://rubyreferences.github.io/rubychanges/2.6.html)

Summary of headings:

> - Endless range: (1..)
> - Non-ASCII constant names
> - else in exception-handling context
> - Refinements: improved visibility
> - Misc
> - Kernel
> - Module#method_defined?: inherit argument
> - String#split with block
> - Time: support for timezones
> - Proc composition
> - Array#union and Array#difference
> - Hash#merge with multiple arguments
> - Enumerables
> - Range
> - Exceptions
> - Filesystem and IO
> - Minor changes
> - Introspection
> - TracePoint improvements
> - Large updated libraries
> - Libraries promoted to default gem

<script>
// Array.from(document.querySelectorAll('h3')).map((el) => el.innerHTML.replace(/<[^>]+>/g, '')).map((l) => `> - ${l}`).join("\n")
</script>
