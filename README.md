# console-png

[![NPM Version](https://img.shields.io/npm/v/console-png.svg)](https://www.npmjs.com/package/console-png)
[![Build Status](https://img.shields.io/travis/aantthony/console-png/master.svg)](https://travis-ci.org/aantthony/console-png)

Print PNG images to terminal output.

## Install

To use this on your terminal:
```
npm install -g console-png
```

To use this programatically:
```
npm install --save console-png
```

## Terminal Usage
```
> console-png
Usage: console-png [PNG FILE]...
> console-png apple.png
{image shown here}
```

## Example Usage

```js
require('console-png').attachTo(console);

var image = require('fs').readFileSync(__dirname + '/nodejs-green.png');

console.png(image);
```

![Screenshot](/demo/screenshot.png)

## Alternate Usage

```js
var pngStringify = require('console-png');

var image = require('fs').readFileSync(__dirname + '/nodejs-green.png');

pngStringify(image, function (err, string) {
  if (err) throw err;
  console.log(string);
})
```
