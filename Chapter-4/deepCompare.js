/**
 * Created by amanulchowdhury.
 */

const deepEqual = (a, b) => {
    if(a === b) {
        return true;
    }

    if(a === null || typeof a !== 'object' || b === null || typeof b != 'object') {
        return false;
    }

    let propsLenA = Object.keys(a).length,
        propsLenB = Object.keys(b).length;

    for(let prop in b) {
        if(!(prop in a) || !deepEqual(a[prop], b[prop])) {
            return false;
        }
    }

    return propsLenA === propsLenB;
};

module.exports = deepEqual;
