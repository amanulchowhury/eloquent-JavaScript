/**
 * Created by amanulchowdhury.
 */

const randomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};


module.exports = randomElement;
