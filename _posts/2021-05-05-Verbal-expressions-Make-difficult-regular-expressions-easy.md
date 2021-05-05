---
layout: post
title: "Verbal expressions: Make difficult regular expressions easy"
category: "ruby"
date: 2021-05-05
---

> Make difficult regular expressions easy! Ruby port of the awesome VerbalExpressions repo - https://github.com/jehna/VerbalExpressions

```
# Create an example of how to test for correctly formed URLs
tester = VerEx.new do
  start_of_line
  find 'http'
  maybe 's'
  find '://'
  maybe 'www.'
  anything_but ' '
  end_of_line
end

# Create an example URL
test_url = "https://www.google.com"

# Use it just like a regular Ruby regex:
puts 'Hooray!  It works!' if tester.match(test_url)
puts 'This works too!' if tester =~ test_url

# Print the generated regex:
puts tester.source # => /^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/
```

Source: [ryan-endacott/verbal_expressions: Make difficult regular expressions easy! Ruby port of the awesome VerbalExpressions repo - https://github.com/jehna/VerbalExpressions](https://github.com/ryan-endacott/verbal_expressions)

This is an interesting idea (and possibly more maintainable than standard regular expressions).
