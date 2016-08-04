/* jshint node: true */
'use strict';
var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-dashboard-update',

  createDeployPlugin: function (options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name
    });

    return new DeployPlugin();
  },
  isDevelopingAddon: function() {
    return true;
  }
};
