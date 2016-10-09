/**
 * Created by amanulchowdhury.
 */
let directionNames = require('./../grid/directionNames');

const dirPlus = function (dir, n) {
    let index = directionNames.indexOf(dir);

    return directionNames[(index + n + 8) % 8];
};
