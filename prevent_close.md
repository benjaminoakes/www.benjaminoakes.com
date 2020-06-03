---
layout: null
title: Prevent Close
permalink: /prevent_close/
---

<!-- Open in Chrome to prevent a window from closing.  You have to click within the window at least once. -->

<script>window.onbeforeunload = function() { return "Are you sure you want to close multiple tabs?"; }</script>
