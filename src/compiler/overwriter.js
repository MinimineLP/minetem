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
      var overwrites = util.overwriteLayout.start;

      value.forEach(function(val) {
        var model = null;
        if(!Number.isInteger(val)){
          model = val[1];
          val = val[0];
        }
        var overwrite = util.overwriteLayout.overwrite
          .replaceAll('%damage%', val*(1/util.damage[key]));

        if(model != null) overwrite = overwrite.replaceAll('%location%', model);
        else overwrite = overwrite.replaceAll('%location%', `custom/${key}/${val}`);

        overwrites += overwrite;
      });

      overwrites+=util.overwriteLayout.end;
      overwrites = overwrites.replaceAll('%type%', key);

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
