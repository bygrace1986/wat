# Wat

This project exists to illustrate an issue that I am experiencing. The odd behavior is that the properties that are added to an object through a destructuring assignment are present when passed to `forRoot` but are not present when injected into a service. Additionally, updates made after initialization are present when passed to `forRoot` but are not present when injected into a service.

To reproduce this issue just clone this repository and run `ng serve --aot`.
