---
id: 230
title: Calculating multiple column average in SQLite3
date: 2010-03-13T11:00:54+00:00
author: Ben
layout: post
guid: http://www.benjaminoakes.com/?p=230
permalink: /2010/03/13/calculating-multiple-column-average-in-sqlite3/
categories:
  - Uncategorized
---
From [my question on StackOverflow](http://stackoverflow.com/questions/2546503/calculating-multiple-column-average-in-sqlite3) ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)):

> I need to average some values in a _row_-wise fashion, rather than a _column_-wise fashion. (If I were doing a column-wise average, I could just use `avg()`). My specific application of this requires me ignore NULLs in averaging. It&#8217;s pretty straightforward logic, but seems awfully difficult to do in SQL. Is there an elegant way of doing my calculation?
> 
> I&#8217;m using SQLite3, for what it&#8217;s worth.
> 
> **Details**
> 
> If you need more details, here&#8217;s an illustration:
> 
> I have a a table with a survey:
> 
> <pre><code class="no-highlight">| q1 | q2    | q3    | ... | q144 |
|----|-------|-------|-----|------|
| 1  | 3     | 7     | ... | 2    |
| 4  | 2     | NULL  | ... | 1    |
| 5  | NULL  | 2     | ... | 3    |</code></pre>
> 
> (Those are just some example values and simple column names. The valid values are 1 through 7 and NULL.)
> 
> I need to calculate some averages like so:
> 
>     q7 + q33 + q38 + q40 + ... + q119 / 11 as domain_score_1
>     q10 + q11 + q34 + q35 + ... + q140 / 13 as domain_score_2
>     ...
>     q2 + q5 + q13 + q25 + ... + q122 / 12 as domain_score_14
> 
> ...but i need to pull out the nulls and average based on the non-nulls. So, for `domain_score_1` (which has 11 items), I would need to do:
> 
> <pre><code class="no-highlight">Input:  3, 5, NULL, 7, 2, NULL, 3, 1, 5, NULL, 1

(3 + 5 + 7 + 2 + 3 + 1 + 5 + 1) / (11 - 3)
27 / 8
3.375</code></pre>
> 
> A simple algorithm I&#8217;m considering is:
> 
> Input:
> 
> <pre><code class="no-highlight">3, 5, NULL, 7, 2, NULL, 3, 1, 5, NULL, 1 </code></pre>
> 
> Coalesce each value to 0 if NULL:
> 
> <pre><code class="no-highlight">3, 5, 0, 7, 2, 0, 3, 1, 5, 0, 1</code></pre>
> 
> Sum:
> 
> <pre><code class="no-highlight">27</code></pre>
> 
> Get the number of non-zeros by converting values > 0 to 1 and sum:
> 
> <pre><code class="no-highlight">3, 5, 0, 7, 2, 0, 3, 1, 5, 0, 1
1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1
8</code></pre>
> 
> Divide those two numbers
> 
> <pre><code class="no-highlight">27 / 8
3.375</code></pre>
> 
> But that seems like a lot more programming than this should take. Is there an elegant way of doing this that I&#8217;m not aware of?