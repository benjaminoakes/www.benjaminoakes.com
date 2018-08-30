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
