## Stage: Staging MVP

- [x] Custom 404 page
- [x] Add AdSense
  - [x] Confirm ads work in staging
- [x] Test publishing to Twitter
- [x] Automate publishing to existing host
- [x] Test on existing host
- [x] Un-customize RSS feed generation
- [x] Reduce number of posts on root page
- [x] Change rel=alternate to Feedburner
- [x] Add Analytics
- [ ] Remove id, guids from frontmatter
- [ ] Import content from existing website
  - [ ] Fix entities
  - [ ] Fix pipes

To fix:

```
_posts/2015-11-08-super-mario-world-castle-theme-organ-cover.md
2016/10/29/apples-phil-schiller-thinks-its-sad-that-people-use-5-year-old-computers/
2017/01/26/10-simple-ways-to-use-less-oil/
/2010/11/23/rails-timezones/
```

Needs redirect from:

* `_posts/2010-05-11-validates_uniqueness_of-with-multiple-scopes.md`

- [ ] Check for direct links/images from www.benjaminoakes.com
- [ ] Check for more iframes for vimeo/youtube

- [ ] Confirm posts retain the same URLs

## Stage: Production MVP

- [ ] Change [Feedburner](https://feedburner.google.com/fb/a/myfeeds) "Original Feed"
- [ ] Replace benjaminoakes.com on existing host
- [ ] Confirm ads work in production
- [ ] Confirm analytics work in production
- [ ] Configure DNS so that benjaminoakes.com and www.benjaminoakes.com work appropriately

## Stage: New Host MVP

- [ ] Change DNS to point to GitHub for www.benjaminoakes.com and benjaminoakes.com
- [ ] Delete https://github.com/benjaminoakes/staging.benjaminoakes.com
- [ ] Delete http://jekyll.benjaminoakes.com

## Backlog

- [ ] Convert FeedBurner
- [ ] Convert Twitter
- [ ] Add DNS records for GitHub hosting
- [ ] Add Disqus
- [ ] Add old WordPress comments
- [ ] Add search back
- [ ] Site map?
