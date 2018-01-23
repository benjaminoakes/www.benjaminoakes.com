---
layout: post
title:  "AWS Lambda Supports Go"
date:   2018-01-23
---

<blockquote>
<p>You can now develop your <a href="/lambda/">AWS Lambda</a> function code using Go. Lambda lets you run code without provisioning and managing servers. You simply upload your Go executable artifact as a ZIP file through the AWS CLI or Lambda console and select the <i>go1.x</i> runtime. With Lambda, you can use Go's native tools to build and package your code. Read our <a href="http://docs.aws.amazon.com/lambda/latest/dg/welcome.html">documentation</a> for more details.&nbsp;</p>
</blockquote>

Source: [AWS Lambda Supports Go](https://aws.amazon.com/about-aws/whats-new/2018/01/aws-lambda-supports-go/)

Cool... but I'm still surprised you upload a ZIP file.  Seems like everyone ends up building their own hand-rolled artifact builder for their Git repository.  If AWS just provided one instead, they'd probably get more adoption of Lambda.
