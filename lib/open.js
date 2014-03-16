'use strict';

var exec = require('child_process').exec;

function escape(s) {
  return s.replace(/"/g, '\\\"');
}

// open a file or uri using the default application for the file type
module.exports = function (target, browser) {
  var cmd = {
    darwin: 'open' + (browser ? ' -a ' : ''),
    win32: 'start ""'
  };

  var opener = cmd[process.platform] + (browser ? ' "' + escape(browser) + '"' : '');

  return exec(opener + ' "' + escape(target) + '"');
};
