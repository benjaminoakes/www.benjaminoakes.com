---
layout: null
title: SMS Test
permalink: /sms_test/
---

<!DOCTYPE html>
<html>
  <head>
    <title>Bookmarklets</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
  </head>
  <body>
    <main>
      <a href="javascript:handleLink()">SMS the saved number</a>

      <form onsubmit="saveToLocalStorage(event)">
        <label for="phone">Phone</label><br>
        <input type="text" name="phone"><br>
        <input type="submit" value="Save">
      </form>
    </main>
  </body>
  <script>
function handleLink(event) {
  document.location = `sms://${encodeURIComponent(localStorage.phone)}`
}

function saveToLocalStorage(event) {
  event.preventDefault()

  Array.from(event.target).forEach(function (input) {
    localStorage[input.name] = input.value
  })

  alert("Saved!")
  document.location.reload()
}
  </script>
</html>
