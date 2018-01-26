# Ruby 2.0 Rundown

@benjaminoakes

[![Continuity Control](http://continuity-marketing.s3.amazonaws.com/assets/logo-a2aa39ff17a16c3dccb1c921a86f2c47.jpg)](http://continuity.net/)

[continuity.net](http://continuity.net/)

!SLIDE

## Ruby is 20 years old!

Ruby 2.0 was released on its birthday, Feb 24th

!SLIDE

## What is it?

* THE FUTURE OF RUBY
* But think of it as "Ruby 1.9.4" (almost)
* Supposedly 100% backward compatible with 1.9.3
* More about "release 2.0 on 20th birthday" than anything.  :)

!SLIDE

## Then what's new?

From a developer's perspective:

* Some new syntax
* Some new features
* Some performance improvements
* Unfortunately: some breakage

!SLIDE

## My experiences

* Does seem to be *mostly* backward compatible with simple Ruby code
* Example: Maid's specs passed without any change
* Many libraries that I've tried (Bundler, Thor, Rake, Rspec, Slidedown, etc.) work out of the box

!SLIDE

## The good

Things I like:

* `__dir__`
* `%i` / `%I`
* `to_h`
* Keyword arguments
* Lazy evaluation

!SLIDE

## The bad

Not ready for prodution use, yet.

* Some stuff **did** break: debugger, Rails 3.x (but a fix is coming), more?
* Rails breakage cause: some methods on `Object` are now private
* Others?
* Unless you're **only** using Ruby 2.0, you can't use the new features without a shim.  (That is, gems will still have to target 1.9.x for a while.)

!SLIDE

## DON'T PANIC

These problems will shake out over time.

Some breakage is to be expected.

!SLIDE

## New features

Many thanks to [Mat Sadler](http://globaldev.co.uk/2012/11/ruby-2-0-0-preview-features/) for his writeup.

!SLIDE

## New features

* `=>` `__dir__`
* `%i` / `%I`
* `to_h`
* Keyword arguments
* Lazy evaluation

!SLIDE

## `__dir__`

If you've ever hated writing `File.dirname(__FILE__)` over and over, you'll love this

    p __dir__
    # => "/vagrant"

!SLIDE

## New features

* `__dir__`
* `=>` `%i` / `%I`
* `to_h`
* Keyword arguments
* Lazy evaluation

!SLIDE

## `%i`

Like `%w()`, but for symbols.

    p %i(panda bamboo)
    # => [:panda, :bamboo]


Seems roughly the same as:

    p %w(panda bamboo).map { |s| s.intern }
    # => [:panda, :bamboo]

Like normal, be careful when making symbols from user input.

!SLIDE

## New features

* `__dir__`
* `%i` / `%I`
* `=>` `to_h`
* Keyword arguments
* Lazy evaluation

!SLIDE

## `to_h`

* Gets a `Hash` representation of an object.
* A relatively-common expectation from Rubyists.  If we have `to_s`, `to_a`, and `to_sym` for the other core types, why not `to_h`?
* Kind of like `serializable_hash` in Rails.

!SLIDE

## `to_h` (cont'd)

Searching ruby-doc.org core gave:

* `ENV.to_h`
* `Hash#to_h`
* `NilClass#to_h`
* `Struct#to_h`

...and a handful of aliases called `to_hash` (from 1.9)

!SLIDE

## `to_h` (cont'd)

    p ENV.to_h # => {"TERM"=>"xterm", "SHELL"=>"/bin/bash", ...}
    p {}.to_h # => {}
    p nil.to_h # => {}

    s = Struct.new(:panda, :bamboo).new
    p s.to_h # => {:panda=>nil, :bamboo=>nil}

!SLIDE

## `to_h` (cont'd)
    
Searching ruby-doc.org std-lib gave:

* Useful:
    * `OpenStruct#to_h`
* Less common:
    * `JSON::Ext::Generator::State`
    * `XMLRPC::FaultException`
    * `OpenSSL::X509::Extension`

!SLIDE

## `to_h` (cont'd)

    require 'ostruct'
    os = OpenStruct.new(panda: 'bamboo')
    p os # => #<OpenStruct panda="bamboo">
    p os.to_h # => {:panda=>"bamboo"}

!SLIDE

## `to_h` (cont'd)

### The ugly

!SLIDE

## `to_h` (cont'd)

This doesn't work:

    %w(panda bamboo).to_h
    # => NoMethodError: undefined method `to_h'

I might have expected behavior like this:

    p Hash['panda', 'bamboo']
    # => {"panda"=>"bamboo"}

!SLIDE

## `to_h` (cont'd)

I screwed that up the first time (nested array `Hash[['panda', 'bamboo']]`), and got a bunch of new warnings:

    # (irb):5: warning: wrong element type String
    #     at 0 (expected array)
    # (irb):5: warning: ignoring wrong elements is
    #     deprecated, remove them explicitly
    # (irb):5: warning: this causes ArgumentError
    #     in the next release
    # [...]

In Ruby 1.9.3, it would print no warnings and return `{}`.

!SLIDE

## `to_h` (cont'd)

I also was hoping JSON would take advantage ([More info](http://www.ruby-doc.org/stdlib-2.0/libdoc/json/rdoc/JSON.html))

    require 'json'
    p JSON.generate(ENV)
    # => /usr/local/lib/ruby/2.0.0/json/common.rb:
    #       223:in `generate': only generation of
    #       JSON objects or arrays allowed
    #       (JSON::GeneratorError)
    #   from /usr/local/lib/ruby/2.0.0/json/common.rb:223:
    #       in `generate'
    #   from tmp/talk_code.rb:3:in `<main>'

!SLIDE

## `to_h` (cont'd)

Can do:

    require 'json'
    p ENV.to_h.to_json
    # => "{\"TERM\":\"xterm\",\"SHELL\": ...

!SLIDE

## `to_h` (cont'd)

* Useful for duck typing.
* Possibly a cleaner alternative to hackery with `Hash[]` too, if you've ever done that.

!SLIDE

## `to_h` (cont'd)

Duck typing example:

    def eat(diet)
      diet.to_h[:eats]
    end

    panda_diet = { eats: 'bamboo' }
    p eat(panda_diet)
    # => "bamboo"

!SLIDE

## `to_h` (cont'd)

Duck typing example:

    def eat(diet)
      diet.to_h[:eats]
    end

    panda_diet = Struct.new(:eats).new('bamboo')
    p eat(panda_diet)
    # => "bamboo"

!SLIDE

## `to_h` (cont'd)

Duck typing with "coercion" example:

    def eat(diet)
      # New in 2.0: `Hash(obj)`
      #
      # Like `Array(obj)` or `String(obj)`
      #
      # Similar in 1.9: `Hash[diet]`
      Hash(diet)[:eats]
    end

    panda_diet = { eats: 'bamboo' }
    p eat(panda_diet)
    # => "bamboo"

!SLIDE

## New features

* `__dir__`
* `%i` / `%I`
* `to_h`
* `=>` Keyword arguments
* Lazy evaluation

!SLIDE

## Keyword arguments

Finally, a built in way to handle what we already do all the time:

    some_method(positional_arg, panda: 'bamboo')

!SLIDE

## Keyword arguments (cont'd)

    # Ruby < 2.0 idiom
    def some_method(positional_arg, opts)
      panda = opts[:panda] || 'bamboo'
      # ...
    end

    # Ruby 2.0
    def some_method(positional_arg, panda: 'bamboo')
      # ...
    end

!SLIDE

## Keyword arguments (cont'd)

2 ways of defining

!SLIDE

## Keyword arguments (cont'd)

    # As keywords
    def keywords(positional, panda: 'bamboo', place: 'Earth')
      p positional
      p panda
      p place
    end

    keywords('foo', panda: 'kung fu')
    # =>
    # "foo"
    # "kung fu"
    # "Earth"

!SLIDE

## Keyword arguments (cont'd)

    # As keywords
    def keywords(positional, panda: 'bamboo', place: 'Earth')
      p positional
      p panda
      p place
    end

    # 1.8 style hashes accepted
    keywords('eats', :panda => 'shoots and leaves')
    # =>
    # "eats"
    # "shoots and leaves"
    # "Earth"

!SLIDE

## Keyword arguments (cont'd)

    # As keywords
    def keywords(positional, panda: 'bamboo', place: 'Earth')
      p positional
      p panda
      p place
    end

    # Position doesn't matter
    keywords('greeting', place: 'China', panda: 'nom nom nom')
    # =>
    # "greeting"
    # "nom nom nom"
    # "China"

!SLIDE

## Keyword arguments (cont'd)

    # As a capture ("double splat")
    #
    # Kind of like Python, but better.
    #
    # Because it's Ruby.
    def capture(**kwargs)
      p kwargs
    end

    capture(anything: 'that', I: 'want')
    # =>
    # {:anything=>"that", :I=>"want"}

!SLIDE

## New features

* `__dir__`
* `%i` / `%I`
* `to_h`
* Keyword arguments
* `=>` Lazy evaluation

!SLIDE

## Lazy evaluation

* Defer computation until it's actually necessary.
* Allows for infinite computation too.
* Related to `Enumerator` (`Enumerator::Lazy`)
* Similar to how querying works in Rails 3 (`Panda.where(...)` doesn't retreive a result until needed)

!SLIDE

## Lazy evaluation example

From [the docs](http://ruby-doc.org/core-2.0/Enumerator/Lazy.html):

    # See Kernel#to_enum for the definition of repeat
    require_relative './repeat'

    r = 1..Float::INFINITY
    r.repeat(2).first(5) # => [1, 1, 2, 2, 3]
    r.repeat(2).class # => Enumerator
    # r.repeat(2).map { |n| n ** 2 }.first(5) # => endless loop!
    # works naturally on lazy enumerator:
    r.lazy.repeat(2).class # => Enumerator::Lazy
    r.lazy.repeat(2).map { |n| n ** 2 }.first(5) # => [1, 1, 4, 4, 9]

!SLIDE

## That's all I have...

There's a lot of changes, but those are some that I like.

!SLIDE

## What I didn't cover

* Async exception handling API
* DTrace / TracePoint
* GC optimization
* Onigmo (new regexp engine, fork of Oniguruma, more Perl-like)
* Refinements
* UTF-8 encoding default
* `Kernel#require` performance improvements
* `Float` operation performance improvements
* `Module#prepend`

!SLIDE

## So how do I get Ruby 2?

* From source (easy: `./configure && make && sudo make install`)
* Using `rvm` or `rbenv`
* Very few packaged versions in official repos (Fedora 19 will have it)
* Heads up: OS X has some OpenSSL issues when compiling.  (Not present on Linux)
    * Need `rvm pkg install openssl` first
!SLIDE

## Thanks!

### Q&A

@benjaminoakes

[![Continuity Control](http://continuity-marketing.s3.amazonaws.com/assets/logo-a2aa39ff17a16c3dccb1c921a86f2c47.jpg)](http://continuity.net/)

[continuity.net](http://continuity.net/)

!SLIDE

## Other references

These were very useful when preparing this.

* Official post: [Ruby 2.0.0-p0 is released](http://www.ruby-lang.org/en/news/2013/02/24/ruby-2-0-0-p0-is-released/)
* [Preview of the new features in Ruby 2.0.0 by Mat Sadler](http://globaldev.co.uk/2012/11/ruby-2-0-0-preview-features/)
* [Ruby 2.0 on Rails by Akira Matsuda](https://speakerdeck.com/a_matsuda/ruby-2-dot-0-on-rails)
* [What's New in Ruby 2.0 by Urabe Shyouhei](https://speakerdeck.com/shyouhei/whats-new-in-ruby-2-dot-0)
* Not covered: [Official incompatibility list](http://www.ruby-lang.org/en/news/2013/02/24/ruby-2-0-0-p0-is-released/#label-8)

!SLIDE

## `Module#prepend`

Replacement for `alias_method_chain` hackery.

!SLIDE

## `Module#include` example

    module Diet
      def eats; 'bamboo'; end
    end

    class Panda
      include Diet

      def eats; 'shoots and leaves'; end
    end

    p Panda.new.eats # => 'shoots and leaves'

!SLIDE

## `Module#prepend` example

    module Diet
      def eats; 'bamboo'; end
    end

    class Panda
      prepend Diet # <-------

      def eats; 'shoots and leaves'; end
    end

    p Panda.new.eats # => 'bamboo'

