---
layout: post
title: "Testing changes to GitHub CODEOWNERS"
category: "git"
date: 2018-08-10
---

Since `.github/CODEOWNERS` and `.gitignore` share the same syntax, you can use this strategy to test the files that are included by your codeowners rules.

First, replace your `.gitignore` with the file globs that you'd like to check:

```
# be sure to remove the owner name!
*.xyz
```

Then run this command:

```
# It's fairly important to ignore .git, but the other paths may vary in your situation.
find . \( -path ./.git -o -path ./tmp \) -prune -o -print | git check-ignore -v --stdin --no-index
```

Once you're done, simply `git checkout .gitignore`.

Related:

  - [git-check-ignore Documentation](https://git-scm.com/docs/git-check-ignore)
  - [About CODEOWNERS - GitHub User Documentation](https://help.github.com/articles/about-codeowners/)

**Warning (2018-08-31):**

I discovered what I consider to be a bug in `CODEOWNERS`.  If you're using rules that are complex enough to have arrived at this page, you might be interested in this writeup I sent to GitHub Support.

> Dear support,
> 
> I've discovered what I believe to be a bug in CODEOWNERS.  In particular, a single line failing to parse causes the entire file to stop identifying codeowners.  This is in contrast to `.gitignore`, in which a single line failing to parse simply causes that line to be skipped.  This is very surprising behavior and may have silently caused other users of CODEOWNERS to stop having their rules applied, as it did for us.
> 
> I discovered this while adding rules for a new team that was created at our company.  There were a number of complex rules, like:
> 
>     # Some comment
>     example.rb @company/original_team
> 
>     # Another comment
>     #
>     # More explanation
>     **/foo/bar/ @company/original_team
>     **/baz/ @company/new_team
>     **/foo/bar/*cx* @company/new_team # Further explanation
> 
> After merging, I discovered that *all* codeowners notifications had completely ceased.  I eventually debugged this and tracked it down to a line that failed to parse.  In particular, an end-of-line comment was used ("Further explanation", above) which is not supported.  (Aside: this isn't supported by `.gitignore` either, yet the default highlighting in `vim` makes it appear that it would.  Regardless, using it on one line shouldn't break the entire file.)
> 
> I verified this behavior by making [a sandbox repository][sandbox] and making [pull requests][prs] until I narrowed down when the bug occurred.  Once I added an end-of-line comment, codeowner rules no longer worked at all.  This is very unexpected behavior.  At most, I would have expected an individual line to stop working.
> 
>   [sandbox]: https://github.com/benjaminoakes/codeowners-sandbox
>   [prs]: https://github.com/benjaminoakes/codeowners-sandbox/pulls?q=is%3Apr+is%3Aclosed
> 
> This situation was exacerbated by a lack of error messages in the GitHub UI.  Ideally, we'd have access to a linter or at least highlighting in GitHub that would call out invalid syntax.  Without either, it's difficult to use the codeowners feature in more complex scenarios.
> 
> I hope this report helps rectify the issue.  Please let me know if you require any further information.
> 
> Best wishes,
> 
> Ben

I received the following response:

> Thanks for reaching out! This is currently expected behavior, but I can definitely understand why it would be unexpected. I'll pass your feedback along to the team internally. I can't say if or when a change will happen, but your feedback is in the right hands.
