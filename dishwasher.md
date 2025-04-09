---
layout: page
title: Dishwasher
permalink: /utils/dishwasher/
---

function hoursUntil6AM() {
  // Get the current date and time
  const now = new Date();

  // Get the current time in hours and minutes
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  // Set the target time to 6 AM tomorrow
  const targetHour = 6;
  const targetDate = new Date(now);
  targetDate.setHours(targetHour, 0, 0, 0); // Set to 6 AM today

  // If the current time is already past 6 AM, move the target to the next day
  if (currentHour >= targetHour) {
    targetDate.setDate(targetDate.getDate() + 1); // Move to the next day
  }

  // Calculate the difference in milliseconds
  const timeDifference = targetDate - now;

  // Convert milliseconds to hours
  const hoursLeft = timeDifference / (1000 * 60 * 60);

  // Round the result to the nearest whole number
  return Math.ceil(hoursLeft);
}

// Display the result
document.write("Hours until 6 AM tomorrow: " + hoursUntil6AM());

