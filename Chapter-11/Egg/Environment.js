/**
 * Created by amanulchowdhury.
 */

let parse = require('./Parser');
let evaluate = require('./Evaluator');

let topEnv = Object.create(null);

//Booleans
topEnv['true'] = true;
topEnv['false'] = false;

//Arrays support
topEnv['array'] = function () {
    return Array.prototype.slice.call(arguments, 0);
};

topEnv['length'] = function (array) {
    return array.length;
};

topEnv['element'] = function (array, i) {
      return array[i];
};

//Operators
['+', '-', '*', '/', '==', '<', '>'].forEach(function (op) {
    topEnv[op] = new Function('a, b', `return a ${op} b;`);
});

//Print
topEnv['print'] = function (value) {
    console.log(value);
    return value;
};


function run() {
    let env = Object.create(topEnv);

    let program = Array.prototype.slice.call(arguments, 0).join('\n');

    return evaluate(parse(program), env);
}

module.exports = run;
