---
layout: post
title: "Hosting SQLite databases on Github Pages (or any static file hoster)"
category: "web"
date: 2021-05-16
---

> In the past when Ive used a backend server for these small side projects at some point some external API goes down or a key expires or I forget about the backend and stop paying for whatever VPS it was on. Then when I revisit it years later, Im annoyed that its gone and curse myself for relying on an external service - or on myself caring over a longer period of time.
>
> Hosting a static website is much easier than a "real" server - theres many free and reliable options (like GitHub, GitLab Pages, Netlify, etc), and it scales to basically infinity without any effort.
>
> So I wrote a tool to be able to use a real SQL database in a statically hosted website!
>
> Heres a demo using the World Development Indicators dataset - a dataset with 6 tables and over 8 million rows (670 MiByte total).

Source: [Hosting SQLite databases on Github Pages - (or any static file hoster) - phiresky's blog](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/)

It's kind of ridiculous that this seems to work well.
