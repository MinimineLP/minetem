/*
 *
 *  Minetem fixer
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

/*
 *
 * This file adds features to prototypes and other classes
 *
 */

 const log = console.log;
 const err = console.error;

console.throwException = function (exception) {
  console.error(exception);
  process.exit(1);
}


console.log = function (text) {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/"
              + currentdate.getFullYear() + "@"
              + currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();
  log(`[${datetime}][INFO] ${text}`)
}

console.warn = function (text) {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/"
              + currentdate.getFullYear() + "@"
              + currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();
  log(`[${datetime}][WARN] ${text}`)
}

console.error = function (text) {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/"
              + currentdate.getFullYear() + "@"
              + currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();
  err(`[${datetime}][ERROR] ${text}`)
}

console.debug = function (text) {
  if(!process.debug)return;
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/"
              + currentdate.getFullYear() + "@"
              + currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();
  log(`[${datetime}][DEBUG] ${text}`)
}

console.err = console.error;

Object.prototype.forEach = function(f) {
  for(let key of this.keys()) {
    f(key, this[key]);
  }
};

Object.prototype.keys = function() {
  return Object.keys(this);
};

String.prototype.replaceAll = function(search, replacement) {     // add String.replaceAll function.
    var target = this;                                            // save the target String in the var target
    return target.replace(new RegExp(search, 'g'), replacement);  //returm the result string
};

String.prototype.methodName = function (search, replacement) {
  str = str.replace(new RegExp(search + '$'), replacement);
};
