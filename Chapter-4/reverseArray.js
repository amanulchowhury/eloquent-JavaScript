/**
 * Created by amanulchowdhury.
 */

const reverseArray = (arr) => {
    let returnArr = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        returnArr.push(arr[i]);
    }

    return returnArr;
};

const reverseInPlace = (arr) => {
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }

    return arr;
};

module.exports = {
    reverse: reverseArray,
    reverseInPlace: reverseInPlace
};
