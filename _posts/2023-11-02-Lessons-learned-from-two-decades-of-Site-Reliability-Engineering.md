---
layout: post
title: "Lessons learned from two decades of Site Reliability Engineering"
category: ""
date: 2023-11-02
---

> 1. The riskiness of a mitigation should scale with the severity of the outage
> 1. Recovery mechanisms should be fully tested before an emergency
> 1. Canary all changes
> 1. Have a "Big Red Button"
> 1. Unit tests alone are not enough - integration testing is also needed
> 1. COMMUNICATION CHANNELS! AND BACKUP CHANNELS!! AND BACKUPS FOR THOSE BACKUP CHANNELS!!!
> 1. Intentionally degrade performance modes
> 1. Test for Disaster resilience
> 1. Automate your mitigations
> 1. Reduce the time between rollouts, to decrease the likelihood of the rollout going wrong
> 1. A single global hardware version is a single point of failure

Source: [Lessons learned from two decades of Site Reliability Engineering](https://sre.google/resources/practices-and-processes/twenty-years-of-sre-lessons-learned/)

This is a good list.  More details are in the article.
