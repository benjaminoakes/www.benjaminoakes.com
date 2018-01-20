---
title: How do I do multiple assignment in MATLAB
date: 2010-02-25T11:00:42+00:00
author: Ben
layout: post
permalink: /2010/02/25/how-do-i-do-multiple-assignment-in-matlab/
categories:
  - Debugging
  - Matlab
  - Programming
---
From [my question on StackOverflow](http://stackoverflow.com/questions/2337126/how-do-i-do-multiple-assignment-in-matlab) ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)):

> Here&#8217;s an example of what I&#8217;m looking for:
>
>     >> foo = [88, 12];
>     >> [x, y] = foo;
>
> I&#8217;d _expect_ something like this afterwards:
>
>     >> x
>     
>     x =
>     
>         88
>     
>     >> y
>     
>     y =
>     
>         12
>
> But instead I get errors like:
>
> ```
> ??? Too many output arguments.
> ```
>
> I thought `deal()` might do it, but it seems to only work on cells.
>
> ```
> >> [x, y] = deal(foo{:});
> ??? Cell contents reference from a non-cell array object.
> ```
>
> How do I solve my problem? Must I constantly index by 1 and 2 if I want to deal with them separately?
