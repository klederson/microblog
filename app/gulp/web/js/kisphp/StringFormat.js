'use strict';

String.prototype.format = function(){
    // get function arguments
    var args = arguments;
    // replace variables in string
    return this.replace(/{(\d+)}/g, function(match, index){
        // return replaced variable
        return args[index];
    });
};

module.exports = String;
