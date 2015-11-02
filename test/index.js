/* global describe it */
'use strict'

var lib = require('../')

describe('demo image', function () {
  it('should be converted into a string', function (done) {
    var file = require.resolve('../demo/nodejs-green.png')
    require('fs').readFile(file, function (err, png) {
      if (err) return done(err)
      lib(png, function (err, string) {
        if (err) return done(err)
        console.log(string)
        if (typeof string !== 'string') {
          throw new Error('Expected a string, got ' + string + ' instead.')
        }
        done()
      })
    })
  })
})
