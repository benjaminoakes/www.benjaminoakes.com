---
id: 220
title: Constants in MATLAB
date: 2009-11-09T11:00:55+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=220
permalink: /2009/11/09/constants-in-matlab/
categories:
  - API
  - Matlab
  - Programming
  - Technology
---
From [my question on StackOverflow](http://stackoverflow.com/questions/1773850/constants-in-matlab) ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)):

> I&#8217;ve come into ownership of a bunch of Matlab code and have noticed a bunch of &#8220;magic numbers&#8221; scattered about the code. Typically, I like to make those constants in languages like C, Ruby, PHP, etc. When googling this problem, I found that the &#8220;official&#8221; way of having constants is to define functions that return the constant value. Seems kludgey, especially because Matlab can be finicky when allowing more than one function per file.
> 
> Is this really the best option?
> 
> I&#8217;m tempted to use / make something like the C Preprocessor to do this for me. (I found that something called `mpp` was made by someone else in a similar predicament, but it looks abandoned. The code doesn&#8217;t compile, and I&#8217;m not sure if it would meet my needs.)