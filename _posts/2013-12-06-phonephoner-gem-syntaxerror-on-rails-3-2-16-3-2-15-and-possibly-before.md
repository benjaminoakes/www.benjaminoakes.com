---
id: 388
title: 'Phone/Phoner gem: SyntaxError on Rails 3.2.16, 3.2.15, and possibly before'
date: 2013-12-06T17:20:48+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=388
permalink: /2013/12/06/phonephoner-gem-syntaxerror-on-rails-3-2-16-3-2-15-and-possibly-before/
categories:
  - Rails
  - Ruby
tags:
  - ActiveRecord::Base
  - ActiveSupport
  - class_eval
  - eval
  - phone
  - phoner
  - phony
  - Rails
  - Ruby
  - SyntaxError
---
From [an issue I opened today](https://github.com/carr/phone/issues/50). We ended up switching to [phony](https://github.com/floere/phony) instead. Just a reminder to everyone out there that `eval` is evil!

> While upgrading a project to 3.2.16 we ran into the following error:
> 
> <pre><code class="no-highlight">syntax error, unexpected end-of-input
          unless defined? @@{:instance_writer=&gt;false}
</code></pre>
> 
> We tracked it down to [monkey patching of `cattr_accessor`](https://github.com/carr/phone/blob/d62324f12ac19951220a26dfa90b5e5cb1369477/lib/phone/support.rb#L48). It looks like some code was copied out of ActiveSupport, but ActiveSupport changed to allow a second argument (e.g., `{:instance_writer=>false}`). The use that&#8217;s causing the error is [in ActiveRecord::Base](https://github.com/rails/rails/blob/v3.2.15/activerecord/lib/active_record/base.rb#L339).
> 
> Backtrace:
> 
> <pre><code class="no-highlight">[...]/gems/phone-1.2.3/lib/support.rb:47: syntax error, unexpected end-of-input
          unless defined? @@{:instance_writer=&gt;false}
                            ^
        from [...]/gems/phone-1.2.3/lib/support.rb:47:in `block in cattr_accessor'
        from [...]/gems/phone-1.2.3/lib/support.rb:46:in `each'
        from [...]/gems/phone-1.2.3/lib/support.rb:46:in `cattr_accessor'
        from [...]/gems/activerecord-3.2.15/lib/active_record/base.rb:339:in `&lt;class:Base&gt;'
        from [...]/gems/activerecord-3.2.15/lib/active_record/base.rb:333:in `&lt;module:ActiveRecord&gt;'
        from [...]/gems/activerecord-3.2.15/lib/active_record/base.rb:33:in `&lt;top (required)&gt;'
</code></pre>
> 
> I hope this helps in providing a fix (or at least for other people who run into the problem).