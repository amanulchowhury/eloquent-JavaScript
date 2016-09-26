/**
 * Created by amanulchowdhury on 9/25/16.
 */

const flatten = (arr) => {
    return arr.reduce((prev, current) => {
        return prev.concat(current);
    }, []);
};

module.exports = flatten;
