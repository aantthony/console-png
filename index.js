'use strict'

var PNGReader = require('png.js')
var colors = require('ansi-256-colors')

var CHAR_HALF_BLOCK = String.fromCharCode(9604)

function printDouble (buffer, done) {
  var reader = new PNGReader(buffer)
  reader.parse(function (err, png) {
    if (err) return done(err)
    var s = ''
    for (var y = 0; y < png.getHeight() - 1; y += 2) {
      if (s) s += colors.reset + '\n'
      for (var x = 0; x < png.getWidth(); x++) {
        var p1 = png.getPixel(x, y)
        var p2 = png.getPixel(x, y + 1)
        var r1 = Math.round(p1[0] / 255 * 5)
        var g1 = Math.round(p1[1] / 255 * 5)
        var b1 = Math.round(p1[2] / 255 * 5)
        var r2 = Math.round(p2[0] / 255 * 5)
        var g2 = Math.round(p2[1] / 255 * 5)
        var b2 = Math.round(p2[2] / 255 * 5)
        if (p1[3] === 0) {
          s += colors.reset + ' ';
        } else {
          s += colors.bg.getRgb(r1, g1, b1) + colors.fg.getRgb(r2, g2, b2) + CHAR_HALF_BLOCK;
        }
      }
    }
    s += colors.reset
    done(null, s)
  })
}

var exports = module.exports = printDouble

exports.attachTo = function (console) {
  var fs = require('fs')
  function printBuffer (buffer) {
    printDouble(buffer, function (err2, string) {
      if (err2) throw err2
      console.log(string)
    })
  }
  console.png = function (filename) {
    if (typeof filename === 'string') {
      fs.readFile(filename, function (err1, buffer) {
        if (err1) throw err1
        printBuffer(buffer)
      })
    } else {
      printBuffer(filename)
    }
  }
}
