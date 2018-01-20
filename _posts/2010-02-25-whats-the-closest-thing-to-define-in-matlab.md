---
id: 229
title: 'What&#8217;s the closest thing to #define in Matlab?'
date: 2010-02-25T11:00:15+00:00
author: Ben
layout: post
permalink: /2010/02/25/whats-the-closest-thing-to-define-in-matlab/
categories:
  - Debugging
  - Matlab
  - Programming
---
From [my question on StackOverflow](http://stackoverflow.com/questions/2337934/whats-the-closest-thing-to-define-in-matlab) ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)):

> In C, I might do something like this:
> 
>     #define MAGIC_NUMBER (88)
>     
>     int foo(int a, int b, int c) {
>       return a + b + c + MAGIC_NUMBER;
>     }
>     
>     double bar(double x, double n) {
>       return x + n + MAGIC_NUMBER;
>     }
>     
>     /*
>      * ...and so on with many kind-of-long functions using
>      * MAGIC_NUMBER instead of writing a literal 88 like so:
>      */
>     
>     double bar(double x, double n) {
>       return x + n + 88;
>     }
> 
> What should I do in Matlab? (Needs to work across multiple files.)