"use strict";

let { chapter, video, exercise } = require('./scratchpad.json');
chapter = (chapter < 10) ? "0" + chapter : "" + chapter;
video = (video < 10) ? "0" + video : "" + video;

const scratchpad = `./${chapter}/${(exercise ? 'exercises' : 'lectures')}/${video}/index.js`;

require(scratchpad);
