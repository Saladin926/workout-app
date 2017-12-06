// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA7zMMsNrZKGCJguBYIKWRPs1FEQzTJBQ8',
    authDomain: 'workout-app-3fafb.firebaseapp.com',
    databaseURL: 'https://workout-app-3fafb.firebaseio.com/',
    projectId: 'workout-app-3fafb',
    storageBucket: 'workout-app-3fafb.appspot.com',
    messagingSenderId: '717857879930'
  }
};
