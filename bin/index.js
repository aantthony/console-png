#!/usr/bin/env node
'use strict'

require('../').attachTo(console)

var argv = process.argv;
var images = process.argv.slice((argv[0] === "console-png")? 1: 2);
images = images.filter(function(filename){
  return filename.substring(filename.length - 4) === ".png"
});

if(images.length === 0){
  var instructions = `Usage: console-png [PNG FILE]...`;
  console.log(instructions);
  process.exit(0);
}

images.forEach(function(filename){
  var image = require('fs').readFileSync(filename);

  console.png(image);
})
