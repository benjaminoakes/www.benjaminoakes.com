---
layout: post
title:  "ES Modules in Node"
date:   2017-08-11
---

> With ESM landing in browsers, attention is turning to Node'gs future ESM support. Unlike browsers, which have an out-of-band parse goal signal and no prior module format, support for ESM in Node is a bit more…prickly. Node's legacy module format, a CommonJS (CJS) variant, is a big reason for Node's popularity, but CJS also complicates Node's future ESM support. As a refresher, let's look at an example of both module syntaxes.
>
> CJS:
>
>     const a = require("./a")
>     module.exports = { a, b: 2 }
>
> ESM:
>
>     import a from "./a"
>     export default { a, b: 2 }

Source: [ES Modules in Node Today! – Web Dev @ Microsoft – Medium](https://medium.com/web-on-the-edge/es-modules-in-node-today-32cff914e4b)
