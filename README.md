# shipit-composer-simple

This shipit task helps you run Composer commands on your distant server.

## Install
```bash
npm install shipit-composer-simple
```

## Usage

### With shipit-cli
Example shipitfile.js:
```js
/*jslint node: true*/
module.exports = function (shipit) {
    'use strict';
    require('shipit-composer-simple')(shipit);

    shipit.initConfig({
        staging: {
            deployTo: '/path/to/working/copy/',
            servers: 'user@example.com',
            composer: {
                noDev: true
            }
        }
    });
};
```

Then run:
```bash
shipit staging composer:install
```

### With grunt
Example Gruntfile.js:
```js
/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-composer-simple');

    grunt.initConfig({
        shipit: {
            staging: {
                deployTo: '/path/to/working/copy/',
                servers: 'user@example.com',
                composer: {
                    noDev: true
                }
            }
        }
    });
};
```

Then run:
```bash
grunt shipit:staging composer:install
```
