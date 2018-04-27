/*
 *
 *  Minetem main
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

// Imports
const modules = require("./modules.js");

var actions = modules.argumentmanager.parseArguments();

process.debug = "debug" in actions;
console.debug("Debug is enabled");

modules.setupModules();

modules.executeArguments(actions);

console.log("Compiling successfully finished!");
