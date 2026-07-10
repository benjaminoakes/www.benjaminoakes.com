---
layout: page
title: Contact
permalink: /contact/
---

If you'd like to get in touch with me, you can:

  * Send me <a class="mailto" data-email="YmxvZ0BiZW5qYW1pbm9ha2VzLmNvbQ==">an email</a>
  * Post a mention on <a href="https://ruby.social/@benjaminoakes">Mastodon</a> (preferred)
  * Send a tweet to <a href="http://twitter.com/benjaminoakes">@benjaminoakes</a>

<script>
  (function () {
    var i, links, link, email;

    links = document.getElementsByClassName('mailto');

    for (i = 0; i < links.length; i++) {
      link = links[i];
      email = atob(link.getAttribute('data-email'));
      link.setAttribute('href', 'mailto:' + email);
    }
  }());
</script>
