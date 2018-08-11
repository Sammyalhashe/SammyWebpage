// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAlpS_hN0L7qkPGdRLH1i6J344SvkGzalo',
        authDomain: 'arduinohandler.firebaseapp.com',
        databaseURL: 'https://arduinohandler.firebaseio.com',
        projectId: 'arduinohandler',
        storageBucket: 'arduinohandler.appspot.com',
        messagingSenderId: '1078009505406'
    }
};
