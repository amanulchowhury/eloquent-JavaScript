/**
 * Created by amanulchowdhury.
 */

const flatten = (arr) => {
    return arr.reduce((prev, current) => {
        return prev.concat(current);
    }, []);
};

module.exports = flatten;
