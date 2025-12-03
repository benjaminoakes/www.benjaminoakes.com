---
layout: post
title: "Userscript: Google Gemini Tab Renamer"
category: ""
date: 2025-12-03
---

Use with [Tampermonkey](https://www.tampermonkey.net/) or a compatible userscript manager:

```javascript
// ==UserScript==
// @name         Google Gemini Tab Renamer
// @namespace    https://benjaminoakes.com/
// @version      1.0
// @description  Sets tab title to the title of the selected chat
// @author       Benjamin Oakes
// @license      CC0-1.0
// @match        https://gemini.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function syncTitle() {
        const targetElement = document.querySelector('.conversation-title');

        if (targetElement && targetElement.innerText.trim().length > 0) {
            const newTitle = targetElement.innerText.trim();

            if (document.title !== newTitle) {
                document.title = newTitle;
            }
        }
    }

    setInterval(syncTitle, 1000);
})();
```
