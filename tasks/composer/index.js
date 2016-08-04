/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');

module.exports = function (gruntOrShipit) {
    require('./install')(gruntOrShipit);
    require('./cmd')(gruntOrShipit);
};
