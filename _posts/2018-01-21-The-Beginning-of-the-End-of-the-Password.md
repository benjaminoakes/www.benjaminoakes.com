---
layout: post
title:  "The Beginning of the End of the Password"
date:   2018-01-21
---

> This specification defines an API enabling the creation and use of strong, attested, scoped, public key-based credentials by web applications, for the purpose of strongly authenticating users. Conceptually, one or more public key credentials, each scoped to a given Relying Party, are created and stored on an authenticator by the user agent in conjunction with the web application. The user agent mediates access to public key credentials in order to preserve user privacy. Authenticators are responsible for ensuring that no operation is performed without user consent. Authenticators provide cryptographic proof of their properties to relying parties via attestation. This specification also describes the functional model for WebAuthn conformant authenticators, including their signature and attestation functionality.

Source: [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://www.w3.org/TR/webauthn/)

The big problem is making this easy enough to use so it can get significant traction in the first place, but it makes a lot of sense to authenticate using public keys instead of passwords.
