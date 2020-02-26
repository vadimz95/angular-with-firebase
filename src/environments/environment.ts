// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
 firebase: {
    apiKey: 'AIzaSyB6pHJKomP_EnavwXd0iXXUt78aL4IlFf4',
    authDomain: 'test-project-af526.firebaseapp.com',
    databaseURL: 'https://test-project-af526.firebaseio.com',
    projectId: 'test-project-af526',
    storageBucket: 'test-project-af526.appspot.com',
    messagingSenderId: '406181155610',
    appId: '1:406181155610:web:6141d899b6ebd39198d2a3',
    measurementId: 'G-9B070QK8VR'
  },
  database: 'firebase',
  socialAuthEnabled: true,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
