/*
 *
 *  Minetem argument manager
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

 const argumentpossibilitys = {
   "compile": 2,
   "debug": 0
 };

module.exports = {
  arguments: getArguments(),                                        // Get the Arguments
  getArguments: getArguments(),                                     // Get the Arguments in a function
  updateArguments: updateArguments,                                 // Update the arguments.
  parseArguments: parseArguments,                                   // Parse the arguments
}

function getArguments() {                                           // Get the Arguments

  var args = [];
  for(var i=2;i<process.argv.length;i++)args[i-2]=process.argv[i];  // Get the right arguments from argv
  return args;

}

function updateArguments() {

  module.exports.arguments = getArgs();

}

function parseArguments(arguments=module.exports.arguments) {

  var actions = {};

  for(var i=0;i<arguments.length;i++) {

    var value = arguments[i];
    if( value in argumentpossibilitys ) {

      var needsubargs = argumentpossibilitys[value];
      if(arguments[i+needsubargs]) {

        var subargs = [];

        for(var c = (i);c<(i+needsubargs);c++)
          subargs[c-i]=arguments[c+1];

        actions[value] = subargs;

        i += needsubargs;

      } else {

        console.throwException(`Argumenterror: You need ${needsubargs} subarguments for the argument "${arguments[i]}"`);

      }
    } else {

      console.throwException(`Argumenterror: Can't work with argument "${arguments[i]}"`);

    }
  }

  return actions;

}
