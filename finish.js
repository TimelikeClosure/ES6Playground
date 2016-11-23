"use strict";

var childProcess = require('child_process');
var scratchpadConfig = require('./scratchpad.json');

var branch = scratchpadConfig.chapter + (scratchpadConfig.exercise ? "e" : '_') + scratchpadConfig.video;

var cmd = 'git add .';
childProcess.execSync(cmd);

cmd = 'git commit -m "Finished ' + branch + '"';
childProcess.execSync(cmd);

cmd = 'git push origin ' + branch;
childProcess.execSync(cmd);
