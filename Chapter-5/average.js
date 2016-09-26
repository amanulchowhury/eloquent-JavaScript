/**
 * Created by amanulchowdhury on 9/25/16.
 */

module.exports = (arr) => {
    const plus = (a, b) => a + b;

    return arr.reduce(plus) / arr.length;
};
