---
layout: post
title: "Headless Chrome: an answer to server-side rendering JS sites"
date: 2018-04-03
---

> The techniques in this article show how to use Puppeteer's APIs to add server-side rendering (SSR) capabilities to an Express web server. The best part is the app itself requires almost no code changes. Headless does all the heavy lifting. In a couple of lines of code you can SSR any page and get its final markup.
> 
> A taste of what's to come:
> 
> ```javascript
> import puppeteer from 'puppeteer';
> 
> async function ssr(url) {
>   const browser = await puppeteer.launch({headless: true});
>   const page = await browser.newPage();
>   await page.goto(url, {waitUntil: 'networkidle0'});
>   const html = await page.content(); // serialized HTML of page DOM.
>   await browser.close();
>   return html;
> }
> ```

Source: [Headless Chrome: an answer to server-side rendering JS sites  -  Tools for Web Developers  - Google Developers](https://developers.google.com/web/tools/puppeteer/articles/ssr)

Interesting, but I wonder how it'll work if the receiving browser doesn't _quite_ match up with what Headless Chrome generates.
