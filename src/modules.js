/*
 *
 *  Minetem module list
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

// Run pre-inits, fixer, etc
require("./functionadder");                           // Function adder


// Enable the classes for the other files
module.exports = {
  main: require("./index.js"),                          // Main file
  argumentmanager: require("./argumentmanager.js"),     // Argument manager
  compiler: require("./compiler/compiler.js"),                   // The Compiler

  executeArguments: executeArguments,                   // This function executes all arguments from the programm start
  setupModules: setupModules,                           // This function setups all modules, and mustn't be called two times
}


// This function setups all modules, and mustn't be called two times
function setupModules() {
  module.exports.forEach(function(key, value) {

    if(value.setup) {

      value.setup();

      // DEBUG:
      console.debug(`Setuped module "${key}"`);
    }
  });
}


// This function executes all arguments from the programm start
function executeArguments(args) {

  args.forEach(function(key,value) {

    if(key == "compile") {
      var src = value[0];
      var dest = value[1];

      module.exports.compiler.compile(src, dest, args["generatefunctions"]);
    }
  });

}
