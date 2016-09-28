/**
 * Created by amanulchowdhury.
 */

module.exports = (arr) => {
    const plus = (a, b) => a + b;

    return arr.reduce(plus) / arr.length;
};
