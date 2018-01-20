---
id: 121
title: WebKit-specific CSS rules (or hacks, if you prefer)
date: 2011-01-28T11:58:37+00:00
author: Ben
layout: post
permalink: /2011/01/28/webkit-specific-css-rules-or-hacks-if-you-prefer/
categories:
  - Web
tags:
  - conditional
  - css
  - file input
  - popular
  - readability
  - webkit
---
There are many things about WebKit-based browsers like Chrome and Safari that I really like. One of them is the file selector widget; I&#8217;ve grown so used to being able to drag-n-drop files onto the control to upload that I really miss it when I use Firefox, IE, or when the developer decided to only give a Flash-based file uploader. It&#8217;s definitely saved me hours in poking around in my files. 

Even though I think the widget is great usability-wise, it only really looks good on light backgrounds. It&#8217;s completely _impossible_ to tell what file you&#8217;re uploading if the widget is on a black background: 

<img class="preview" src="http://media.benjaminoakes.com/2011/webkit_input_type_file_before.png" />

That&#8217;s definitely not the case in Gecko (Firefox, etc.) or Internet Explorer. They don&#8217;t give the same readability problems on a dark background. 

### What can you do about it?

Well, it turns out [you can target WebKit-based browsers](http://stackoverflow.com/questions/1849137/safari-conditional-css) with a relatively simple `media` query. Conceptually, it&#8217;s similar to using a [conditional comment](http://www.quirksmode.org/css/condcom.html) to have an &#8220;IE-hacks&#8221; stylesheet. 

In that spirit, I decided to make a `webkit.css` file with WebKit-only rules. Given the support of media queries across browsers and the WebKit-specific `-webkit-min-device-pixel-ratio`, the following makes it possible to give CSS that only affects WebKit. 

#### Within `<head>` add:

```html
<link href="webkit.css" media="screen and (-webkit-min-device-pixel-ratio:0)" rel="stylesheet" type="text/css" />
```

Or, if you don&#8217;t want a separate file, you can avoid that by embedding the rule into an existing stylesheet like so: 

```css
@media screen and (-webkit-min-device-pixel-ratio:0) {
  /* Your CSS */
}
```

#### Within `<head>` add:

Then, to style all the background colors so that `<input type="file" />` is readable, you can do something like this: 

#### `webkit.css`

```css
input[type="file"] {
  background-color: white;
  padding: 3px;
  -webkit-border-radius: 7px;
}
```

That&#8217;s simple enough to fix all file inputs in WebKit, but IE 6, 7, 8 and Firefox continue to work the same way. 

Here&#8217;s the result: 

<img class="preview" src="http://media.benjaminoakes.com/2011/webkit_input_type_file_after.png" />

#### Reactions

<blockquote class="twitter-tweet">
  <p>
    <a href="https://twitter.com/georgemacedo">@georgemacedo</a> <a href="http://t.co/RcxdnlsU">http://t.co/RcxdnlsU</a> ou procura "Hack for Webkit"
  </p>
  
  <p>
    &mdash; Nayara (@corinthiana) <a href="https://twitter.com/corinthiana/statuses/193496342306357248">April 21, 2012</a>
  </p>
</blockquote>

<blockquote class="twitter-tweet">
  <p>
    WebKit-specific <a href="https://twitter.com/search?q=%23CSS&src=hash">#CSS</a> rules <a href="http://t.co/Traf5TNk">http://t.co/Traf5TNk</a> <a href="https://twitter.com/search?q=%23hack&src=hash">#hack</a> <a href="https://twitter.com/search?q=%23howto&src=hash">#howto</a> <a href="https://twitter.com/search?q=%23webdesign&src=hash">#webdesign</a>
  </p>
  
  <p>
    &mdash; Jann de Vries (@minstyle) <a href="https://twitter.com/minstyle/statuses/278162734300950528">December 10, 2012</a>
  </p>
</blockquote>