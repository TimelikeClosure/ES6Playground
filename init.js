"use strict";

var childProcess = require('child_process');
var scratchpadConfig = require('./scratchpad.json');

var branch = scratchpadConfig.chapter + (scratchpadConfig.exercise ? "e" : '_') + scratchpadConfig.video;
var dir = './' + branch;
var index = dir + '\/index.js';

var cmd = 'mkdir "' + dir + '"';
childProcess.execSync(cmd);

cmd = 'touch "' + index + '"';
childProcess.execSync(cmd);

cmd = 'git checkout -b ' + branch;
childProcess.execSync(cmd);
