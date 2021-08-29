---
layout: post
title: "TopLevel: A PHP-like Way to Embed Javascript in Your HTML"
category: "JavaScript"
date: 2021-08-29
---

> TopLevel enables you to template your HTML, CSS, and Javascript at the Top Level like so:
> 
>     <!doctype html>
>     <html>
>       <head>
>         <script src="YourBrowserCheckCode.js"></script>
>         <script src="toplevel.js"></script>
> 
>         <!--% if ( CheckBrowser() == "broken" ) { -->
>           <link rel="stylesheet" href="broken.css">
>         <!--% } else { -->
>           ...
>         <!--% } -->
>         ...
> 
> The stylesheet above **will never load** unless the branch is satisfied.

Source: [kristopolous/TopLevel: A New Way to Javascript Your HTML](https://github.com/kristopolous/TopLevel)

It depends on the technically-deprecated `plaintext` tag.

> This tag has been deprecated since HTML 1.1 - June 1993.

This library was released back in 2014. It's honestly surprising that it works, and while I'm very unsure if it should be used in production, it's interesting, at the very least.
