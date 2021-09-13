---
layout: post
title: "Passing arrow functions to Mocha is discouraged"
category: "javascript"
date: 2021-09-13
---

> Passing arrow functions (aka "lambdas") to Mocha is discouraged. Lambdas lexically bind this and cannot access the Mocha context. For example, the following code will fail:
>
> ```javascript
> describe('my suite', () => {
>   it('my test', () => {
>     // should set the timeout of this test to 1000 ms; instead will fail
>     this.timeout(1000);
>     assert.ok(true);
>   });
> });
> ```
> 
> If you do not need to use Mochas context, lambdas should work. Be aware that using lambdas will be more painful to refactor if the need eventually arises!

Source: [Mocha - the fun, simple, flexible JavaScript test framework](https://mochajs.org/#arrow-functions)

I knew this reason, but didn't have a citation.  Finally found it.
