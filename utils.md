---
layout: page
title: Utilities
permalink: /utils/
---

<button onclick="promptSumString()">Sum String</button>

<script>
  add = (a, b) => a + b
  sumString = (string) => string.split("").map(parseFloat).reduce(add)
  
  function promptSumString() {
    var string = prompt("Numbers?");
    alert(`Sum: ${sumString(string)}`);
  }
</script>
