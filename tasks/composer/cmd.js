/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');
var chalk = require('chalk');

module.exports = function (gruntOrShipit) {
    utils.registerTask(gruntOrShipit, 'composer:cmd', 'Run a custom Composer command on the remote host', function () {
        var shipit = utils.getShipit(gruntOrShipit);

        function cmd() {
            var composerPath = shipit.config.composer.path || 'composer',
                commands,
                remoteCmd = 'cd ' + shipit.config.deployTo;
            if (Array.isArray(shipit.config.composer.cmd)) {
                commands = shipit.config.composer.cmd;
            } else {
                commands = [shipit.config.composer.cmd];
            }
            commands.forEach(function (cmd) {
                remoteCmd += '; ' + composerPath + ' ' + cmd;
            });
            return shipit.remote(remoteCmd);
        }
        return cmd();
    });
};
