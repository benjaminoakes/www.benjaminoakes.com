---
layout: post
title: "Ruby Feature #20205: Enable `frozen_string_literal` by default"
category: ""
date: 2024-01-25
---

>The `frozen_string_literal: true` pragma was introduced in Ruby 2.3, and as far as I'm aware the plan was initially to make it the default for Ruby 3.0, but this plan was abandoned because it would be too much of a breaking change without any real further notice.
>
>According to Matz, he still wishes to enable `frozen_string_literal` by default in the future, but a reasonable migration plan is required.

Source: [Feature #20205: Enable `frozen_string_literal` by default](https://bugs.ruby-lang.org/issues/20205)

Good discussion here.  In any case, I'd like to be able to stop adding `# frozen_string_literal: true` to every new file.
