/*
 *
 *  Minetem compiler
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

const fs = require("fs");
const data = require("./data.js");
const util = require("./util.js");

module.exports = {
  generateOverwrites: generateOverwrites
}

function generateOverwrites(dir) {
  data.ids.forEach(function(key, value) {
    if(value.length>0) {
      var overwrites = util.overwriteLayout.start
        .replaceAll('%type%', key);

      value.forEach(function(value) {
        overwrites += util.overwriteLayout.overwrite
          .replaceAll('%type%', key)
          .replaceAll('%id%', value)
          .replaceAll('%damage%', value*(1/util.damage[key]));
      });

      overwrites+=util.overwriteLayout.end
        .replaceAll('%type%', key);

      var path = dir+`\\assets\\minecraft\\models\\item\\${key}.json`;
      fs.writeFileSync(path, overwrites);

      // DEBUG:
      console.debug(`Created ${key} overwrite file `+fixBackslash(path));
    }
  });
}

function fixBackslash(str) {
  return str.replaceAll('\\\\', '/')
}
