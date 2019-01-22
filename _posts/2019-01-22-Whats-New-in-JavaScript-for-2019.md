---
layout: post
title: "What's New in JavaScript for 2019"
category: "javascript"
date: 2019-01-22
---

> For the last several years, JavaScript has been evolving on a steady cadence with new language features. If youre curious to see whats in store for the next version of JavaScript, this article is for you!

Source: [What's New in JavaScript for 2019 - Okta Developer](https://developer.okta.com/blog/2019/01/22/whats-new-in-es2019)

The new private method syntax is the biggest change from my perspective, but it's awkward to read:

```javascript
class Truck extends Automobile {
  model = "Heavy Duty"; // public field declaration
  #numberOfSeats = 5; // private field declaration
  #isCrewCab = true;
  static #name = "Truck"; // static private field declaration

  // static method
  static formattedName() {
    // Notice that the Truck class name is used
    // to access the static field instead of "this"
    return `This vehicle is a ${ Truck.#name }.`;
  }

  constructor( model, seats = 2 ) {
    super();
    this.seats = seats;
  }

  // Private method
  #getBodyType() {
    return this.#isCrewCab ? "Crew Cab" : "Standard Cab";
  }
```
