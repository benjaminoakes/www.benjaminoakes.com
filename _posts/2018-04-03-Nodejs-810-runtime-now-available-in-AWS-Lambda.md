---
layout: post
title: "Node.js 8.10 runtime now available in AWS Lambda"
date: 2018-04-03
---

> We are excited to announce that you can now develop your AWS Lambda functions using the Node.js 8.10 runtime, which is the current Long Term Support (LTS) version of Node.js. Start using this new version today by specifying a runtime parameter value of `nodejs8.10` when creating or updating functions.
>
> ### Supporting async/await
>
> The Lambda programming model for Node.js 8.10 now supports defining a function handler using the async/await pattern.
>
> Asynchronous or non-blocking calls are an inherent and important part of applications, as user and human interfaces are asynchronous by nature. If you decide to have a coffee with a friend, you usually order the coffee then start or continue a conversation with your friend while the coffee is getting ready. You don't wait for the coffee to be ready before you start talking. These activities are asynchronous, because you can start one and then move to the next without waiting for completion. Otherwise, you'd delay (or block) the start of the next activity.

Source: [Node.js 8.10 runtime now available in AWS Lambda - AWS Compute Blog](https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/)

The big news here is definitely `async`/`await`, at least from my perspective.
