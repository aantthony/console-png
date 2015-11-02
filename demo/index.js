'use strict'

require('../').attachTo(console)

var image = require('fs').readFileSync(__dirname + '/nodejs-green.png')

console.png(image)
