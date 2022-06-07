---
layout: post
title: "Little Things: Refactoring with Hashes"
category: "ruby"
date: 2022-06-07
---

```ruby
  STUDENT_LEVELS = Hash.new(Student::Unregistered).merge(
    freshman:  Student::Underclassman,
    sophomore: Student::Underclassman,
    junior:    Student::Upperclassman,
    senior:    Student::Upperclassman,
    graduate:  Student::Graduate
  )

klass = STUDENT_LEVELS[params[:student_level]]
student = klass.new(name, birthdate, address, phone)
```

Source: [Buckblog: Little Things: Refactoring with Hashes](http://weblog.jamisbuck.org/2015/11/14/little-things-refactoring-with-hashes.html)

A nice little pattern
