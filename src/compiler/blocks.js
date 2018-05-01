/*
 *
 *  Minetem compiler
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

const fs = require("fs");
const path = require("path");
const data = require("./data.js");
const util = require("./util.js");

module.exports = {
  compile: compile
}

function compile(json, dir) {

  if(json.blocks) {
    json.blocks.forEach(function(value) {

      if(!value.id)console.throwException("CompilingError: Need id for every block");
      if(!Number.isInteger(value.id))console.throwException("CompilingError: The id must be a positive number between 1 and 1562");
      if(parseInt(value.id)<1 || parseInt(value.id)>1562)console.throwException("CompilingError: The id must be a positive number between 1 and 1562");

      if(!value.parent)value.parent = "diamond_hoe";

      if(value.id in data.ids[value.parent]) console.throwException("CompilingError: Can't use that id, please try another, it is propably used for another texture.");

      if(!value.textures)console.throwException("CompilingError: Can't create a block without a texture");

      var textures;


      if(value.textures instanceof Object) {

        if(!value.textures.up)console.throwException("CompilingError: Can't create a block without a top texture");
        if(!value.textures.down)console.throwException("CompilingError: Can't create a block without a bottom texture");
        if(!value.textures.west)console.throwException("CompilingError: Can't create a block without a west texture");
        if(!value.textures.east)console.throwException("CompilingError: Can't create a block without a east texture");
        if(!value.textures.north)console.throwException("CompilingError: Can't create a block without a north texture");
        if(!value.textures.south)console.throwException("CompilingError: Can't create a block without a south texture");

        textures = `
        "textures": {
            "up": "${value.textures.up}",
            "down": "${value.textures.down}",
            "west": "${value.textures.west}",
            "east": "${value.textures.east}",
            "north": "${value.textures.north}",
            "south": "${value.textures.south}"
        }`;

      } else if( typeof value.textures === "string") {
        textures = `
        "textures": {
            "up": "${value.textures}",
            "down": "${value.textures}",
            "west": "${value.textures}",
            "east": "${value.textures}",
            "north": "${value.textures}",
            "south": "${value.textures}"
        }`;

      } else {
        console.throwException("The texture must be a string or json");
      }

      var json = `{${util.textureFileLayout.credits},${util.textureFileLayout.display},${textures},${util.textureFileLayout.elements}}`
                .replaceAll('\n', '')
                .replaceAll('  ', '')
                .replaceAll('	','');


      var path = dir+`\\assets\\minecraft\\models\\custom\\${value.parent}\\${value.id}.json`;
      writeFile(path, json);

      // DEBUG:
      console.debug(`Compiled block with id ${value.id} into file `+fixBackslash(path));

      data.ids[value.parent].push(value.id);
    });
  }
}

function fixBackslash(str) {
  return str.replaceAll('\\\\', '/')
}

function writeFile(file, content) {
  if(fs.existsSync(file)) console.throwException("CompilingError: Can't use that id, please try another, it is propably used for another texture.");

  file = file.replaceAll("\\\\", "/");

  var parts = file.split("/");
  for(var i=1;i<parts.length;i++){

    var path = "";

    for(var c=0;c<i;c++)
      path += parts[c]+"/";

    if(!fs.existsSync(path))fs.mkdirSync(path);

  }

  fs.writeFileSync(file, content);
}
