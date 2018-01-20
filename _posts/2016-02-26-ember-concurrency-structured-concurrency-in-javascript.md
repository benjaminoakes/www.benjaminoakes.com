---
title: 'ember-concurrency: structured concurrency in JavaScript'
date: 2016-02-26T19:30:00+00:00
author: Ben
layout: post
permalink: /2016/02/26/ember-concurrency-structured-concurrency-in-javascript/
categories:
  - JavaScript
tags:
  - concurrency
  - ember
  - JavaScript
---
Escape from callback hell in JavaScript, but with cancellation. Excellent visualizations. 

Example code:

    export default Ember.Component.extend({<br clear="none"></br>
      myTask: task(waitAMoment).drop(),<br clear="none"></br>
    });<br clear="none"></br>
    
    

Also interesting: `enqueue`

Source: [EcPrezo](http://alexmatchneer.com/ec-prezo/)