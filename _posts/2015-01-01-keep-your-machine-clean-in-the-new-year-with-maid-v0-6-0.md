---
id: 586
title: Keep your machine clean in the New Year with Maid v0.6.0
date: 2015-01-01T23:31:44+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=586
permalink: /2015/01/01/keep-your-machine-clean-in-the-new-year-with-maid-v0-6-0/
categories:
  - Maid
tags:
  - Automation
  - gem
  - Ruby
---
Happy New Year!

We just released [Maid v0.6.0](https://github.com/benjaminoakes/maid#maid), which is full of new features:

  * Daemon mode, &#8220;watch&#8221;, and &#8220;repeat&#8221; support (thanks Jurriaan Pruis!)
  * Maid tasks for Rake (thanks Pedro Lambert!)
  * Safari download detection (thanks Jayson Rhynas!)
  * Copy (thanks Nico Ritschel!)
  * Image dimensions detection (thanks for the inspiration Coby Chapple!)
  * Official Ruby 2.2.0 support
  * Updated dependencies
  * Improved documentation

As you can see, the Maid community has a lot to do with Maid&#8217;s continued development. Thank you everyone for your contributions!

Maid remains a popular open source project. (Check out others on [my GitHub](https://github.com/benjaminoakes).) It was downloaded by users over 7000 times and starred over 300 times just in 2014, for a total of 16684 downloads and 1045 stars. Our community of users sharing rules now has 42 examples for you to consider when scripting your own Maid.

Let&#8217;s look at a few of the ways Maid helps you with its new features.

## Watch rules {#watchrules}

In the past, Maid has been run manually or via `cron`. Maid v0.6.0 introduces support for watching your filesystem for changes and taking action immediately. (Under the hood, this is implemented with the `listen` gem, which uses `fsevent` on OSX and `inotify` on Linux.)

Starting Maid automatically at login is pretty straitforward on my daily driver (Ubuntu) -- see [the README for details](https://github.com/benjaminoakes/maid#running-as-a-daemon). It isn&#8217;t quite as easy on OSX -- a situation I expect will improve -- but in the meantime, check out Jurriaan&#8217;s great post on running [Maid as a Daemon on OS X](http://jurriaan.ninja/2015/01/01/maid-on-os-x.html).

This new &#8220;watch&#8221; feature opens up all sorts of possibilities. Since Maid can now act automatically, you can even treat folders as drop targets for your Maid rules.

```ruby
Maid.rules do
  # Drop files in this directory and watch the duplicates disappear...
  watch '~/Desktop/De-dupe' do
    rule 'trash dupes' do
      trash verbose_dupes_in('~/Desktop/De-dupe/**/*')
    end
  end

  # Sift through a large collection of downloads by categorizing them as "image", "video", "text", etc.
  watch '~/Downloads' do
    rule 'categorize by media type' do
      files('~/Downloads/*').each do |path|
        move(path, mkdir("~/Downloads/#{media_type(path)}/"))
      end
    end
  end

  # As your photos show up in your Dropbox, Maid will organize them for you!
  watch '~/Dropbox/Camera Uploads' do
    rule 'organize new photos by date' do
      where_content_type(files('~/Dropbox/Camera Uploads/*'), 'image').each do |path|
        iso8601 = modified_at(path).to_date.iso8601.sub('-', '/')
        move(path, mkdir("~/Dropbox/Albums/#{iso8601}/"))
      end
    end
  end
end
```

We still support manual invocation and `cron`, but you should try `watch` -- you&#8217;ll like it.

## Image dimensions {#imagedimensions}

Another handy addition is the ability to read the dimensions of images. Here&#8217;s an example:

```ruby
# Keep your background pictures organized by their dimensions
watch '~/Pictures/Wallpaper' do
  rule 'organize wallpaper by dimensions' do
    where_content_type(dir('~/Pictures/Wallpaper/*'), 'image').each do |image|
      width, height = dimensions_px(image)
      move(image, mkdir("~/Pictures/Wallpaper/#{width}x#{height}"))
    end
  end
end
```

And since it&#8217;s Ruby, you can define your own logic, such as categorizing images as big/small or portrait/landscape.

## Rake tasks {#raketasks}

Once you know Maid, you might miss the methods it provides in your other Ruby projects, so Maid is now available as a Rake task as well. As an example, look no further than [Maid&#8217;s own Rakefile](https://github.com/benjaminoakes/maid/blob/master/Rakefile):

```ruby
require 'maid'

Maid::Rake::Task.new(:clean) do
  # Clean up Rubinius-compilied Ruby
  trash(dir('**/*.rbc'))

  # Get rid of generated files
  trash('doc')
  trash('pkg')
  trash('tmp')
end
```

All Maid tools are available to you in Rake tasks, so you can do any common file manipulations you need.

That&#8217;s all for now. I hope Maid can help you keep your computer tidy in 2015!