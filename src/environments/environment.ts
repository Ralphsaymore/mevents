// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCp4a4h0PhO083RzBwEwGmZP2pNMQ0Qt2w",
    authDomain: "meeventsbackend.firebaseapp.com",
    databaseURL: "https://meeventsbackend.firebaseio.com",
    projectId: "meeventsbackend",
    storageBucket: "meeventsbackend.appspot.com",
    messagingSenderId: "545954320704"
  }

};
