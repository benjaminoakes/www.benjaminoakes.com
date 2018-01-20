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
- [ ] Import content from existing website
  - [x] Fix entities
  - [x] Fix pipes
  - [x] Remove id, guids from frontmatter

To fix:

```
2014/04/02/multi-line-memoization/
2013/08/30/using-dom_id-with-a-presenter-or-other-objects/
2013/04/02/calculating-the-next-leap-year-in-ruby/
2012/10/26/database-configuration-does-not-specify-adapter/
_posts/2015-11-08-super-mario-world-castle-theme-organ-cover.md
2016/10/29/apples-phil-schiller-thinks-its-sad-that-people-use-5-year-old-computers/
2017/01/26/10-simple-ways-to-use-less-oil/
/2010/11/23/rails-timezones/
/2011/03/22/throwcatch-vs-raiserescue/
```

Needs redirect from:

* `_posts/2010-05-11-validates_uniqueness_of-with-multiple-scopes.md`

Why 404?

* /2015/01/05/podcast-url-extractor/
* 2011/01/12/captions-on-sanyo-tv-with-universal-remote/comment-page-1/

- [ ] Add codefences for `class="ruby"`
- [ ] Check for direct links/images from www.benjaminoakes.com
- [ ] Check for more iframes for vimeo/youtube http://www.benjaminoakes.com/?s=iframe

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
