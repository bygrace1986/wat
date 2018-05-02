# Wat

This project exists to illustrate an issue that I am experiencing. I am seeing some behavior that I cannot explain when using object destructuring assignment (or Object.assign) to construct an object that is passed to the static `forRoot` method on an imported module which is then provided by that module. It only appears when serving/building with `--prod`. The odd behavior is that the properties that are added to the object through the destructuring assignment are present when passed to `forRoot` but are not present when injected into a service.

To reproduce this issue just clone this repository and run `ng serve --prod`.
