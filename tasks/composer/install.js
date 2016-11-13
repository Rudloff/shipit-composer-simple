/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');
var chalk = require('chalk');

module.exports = function (gruntOrShipit) {
    utils.registerTask(gruntOrShipit, 'composer:install', 'Run composer install on the remote host', function () {
        var shipit = utils.getShipit(gruntOrShipit);

        function install() {
            var composerPath = shipit.config.composer.path || 'composer',
                cmd = 'cd ' + shipit.config.deployTo + '; ' + composerPath + ' install';
            if (shipit.config.composer.noDev) {
                cmd += ' --no-dev';
            }
            return shipit.remote(cmd)
                .then(function () {
                    shipit.log(chalk.green('Installed composer dependencies'));
                });
        }
        return install();
    });
};
