"use strict";

var scratchpadConfig = require('./scratchpad.json');

var scratchpad = './' + scratchpadConfig.chapter + '_' + scratchpadConfig.lesson + '/index.js';

require(scratchpad);
