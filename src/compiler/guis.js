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

  if(json.guis) {
    json.guis.forEach(function(value) {

      if(!value.id)console.throwException("CompilingError: Need id for every block");
      if(!Number.isInteger(value.id))console.throwException("CompilingError: The id must be a positive number between 1 and 1562");
      if(parseInt(value.id)<1 || parseInt(value.id)>1562)console.throwException("CompilingError: The id must be a positive number between 1 and 1562");

      if(!value.parent)value.parent = "diamond_shovel";
      if(!("inventory" in value))value.inventory = true;

      if(value.id in data.ids[value.parent]) console.throwException("CompilingError: Can't use that id, please try another, it is propably used for another texture.");

      if(!value.texture)console.throwException("CompilingError: Can't create a gui without a texture");

      var json = "";
      if(value.inventory == true) json = util.textureFileLayout.inventory;
      else json = util.textureFileLayout.gui;

      json = json.replaceAll('%path%', value.texture)
                 .replaceAll('\n', '')
                 .replaceAll('  ', '')
                 .replaceAll('	','');


      var path = dir+`\\assets\\minecraft\\models\\custom\\${value.parent}\\${value.id}.json`;
      writeFile(path, json);

      // DEBUG:
      console.debug(`Compiled gui with id ${value.id} into file `+fixBackslash(path));

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
