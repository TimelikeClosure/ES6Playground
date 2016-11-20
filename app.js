"use strict";

var scratchpadConfig = require('./scratchpad.json');

var scratchpad = './' + scratchpadConfig.chapter + (scratchpadConfig.exercise ? "e" : '_') + scratchpadConfig.video + '/index.js';

require(scratchpad);
