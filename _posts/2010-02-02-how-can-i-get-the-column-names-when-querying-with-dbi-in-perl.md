---
id: 222
title: How can I get the column names when querying with DBI in Perl?
date: 2010-02-02T11:00:40+00:00
author: Ben
layout: post
permalink: /2010/02/02/how-can-i-get-the-column-names-when-querying-with-dbi-in-perl/
categories:
  - Debugging
  - Linux
  - Perl
  - Programming
  - Technology
---
From [my question on StackOverflow](http://stackoverflow.com/questions/2283065/how-can-i-get-the-column-names-when-querying-with-dbi-in-perl) ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)):

> I&#8217;m using DBI to query a SQLite3 database. What I have works, but it doesn&#8217;t return the columns in order. Example:
> 
> <pre><code class="no-highlight">Query:  select col1, col2, col3, col4 from some_view;
Output:

    col3, col2, col1, col4
    3, 2, 1, 4
    3, 2, 1, 4
    3, 2, 1, 4
    3, 2, 1, 4
    ...

(values and columns are just for illustration)</code></pre>
> 
> **I know this is happening because I&#8217;m using a hash**, but how else do I get the column names back if I only use an array? All I want to do is get something like this for any **arbitrary** query:
> 
> <pre><code class="no-highlight">    col1, col2, col3, col4
    1, 2, 3, 4
    1, 2, 3, 4
    1, 2, 3, 4
    1, 2, 3, 4
    ...</code></pre>
> 
> (That is, I need the output is in the right order and with the column names.)
> 
> I&#8217;m very much a Perl novice, but I really thought this would be a simple problem. (I&#8217;ve done this before in Ruby and PHP, but I&#8217;m having trouble tracking down what I&#8217;m looking for in the Perl documentation.)
> 
> Here&#8217;s a pared down version of what I have at the moment:
> 
>     use Data::Dumper;
>     use DBI;
>     
>     my $database_path = &#39;~/path/to/db.sqlite3&#39;;
>     
>     $database = DBI->connect(
>       "dbi:SQLite:dbname=$database_path",
>       "",
>       "",
>       {
>         RaiseError => 1,
>         AutoCommit => 0,
>       }
>     ) or die "Couldn&#39;t connect to database: " . DBI->errstr;
>     
>     my $result = $database->prepare(&#39;select col1, col2, col3, col4 from some_view;&#39;)
>         or die "Couldn&#39;t prepare query: " . $database->errstr;
>     
>     $result->execute
>         or die "Couldn&#39;t execute query: " . $result->errstr;
>     
>     ########################################################################################### 
>     # What goes here to print the fields that I requested in the query?
>     # It can be totally arbitrary or &#39;*&#39; -- "col1, col2, col3, col4" is just for illustration.
>     # I would expect it to be called something like $result->fields
>     ########################################################################################### 
>     
>     while (my $row = $result->fetchrow_hashref) {
>         my $csv = join(&#39;,&#39;, values %$row);
>         print "$csv\n";
>     }
>     
>     $result->finish;
>     
>     $database->disconnect;