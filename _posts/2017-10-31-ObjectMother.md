---
layout: post
title:  "ObjectMother"
date:   2017-10-31
---

> An object mother is a kind of class used in testing to help create example objects that you use for testing.
>
> When you write tests in a reasonably sized system, you find you have to create a lot of example data. If I want to test a sick pay calculation on an employee, I need an employee. But this isn't just a simple object - I'll need the employee's marital status, number of dependents, some employment and payroll history. Potentially this can be a lot of objects to create. This set data is generally referred to as the test fixture.
>
> The first move is to create fixture in the setup method of an xunit test - that way it can be reused in multiple tests. But the trouble with this is often you need similar data in multiple test classes. At this point it makes sense to have a factory object that can return standard fixtures. Maybe 'John', an employee who just got hired last week; 'Heather' and employee who's been around for a decade.

Source: [ObjectMother](https://www.martinfowler.com/bliki/ObjectMother.html)
