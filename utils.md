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

<script src="//cdn.opalrb.com/opal/1.0.0/opal.min.js" onload="Opal.require('opal')"></script>
<script src="//cdn.opalrb.com/opal/1.0.0/opal-parser.min.js" onload="Opal.require('opal-parser')"></script>
<script type="text/ruby">
def percentage_of_total(part_of_interest, other_part)
  percent = part_of_interest / (part_of_interest + other_part)
  percent * 100
end

puts "%.2f%%" % percentage_of_total(1241, 9649)
</script>
