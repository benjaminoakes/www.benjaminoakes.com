---
layout: post
title: "How worried should we be about the \"AutoSpill\" credential leak in Android password managers?"
date: 2023-12-16
---

> This newly discovered vulnerability is real, but it's more nuanced than
that.
>
>While much of the press coverage of AutoSpill has described it as an attack,
it's more helpful to view it as a set of unsafe behaviors that can occur
inside the Android operating system when a credential stored in a password
manager is autofilled into an app installed on the device.

Source: [How worried should we be about the "AutoSpill" credential leak in
Android password managers?](https://arstechnica.com/?p=1990601)

Basically, it isn't such a good idea to have every app embed a web browser.

For example, don't autofill your Facebook password within anything but the
Facebook app and your browser.

