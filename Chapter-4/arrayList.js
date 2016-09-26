/**
 * Created by amanulchowdhury on 9/25/16.
 */

const arrayToList = (arr) => {
    let list = null;

    arr.reverse().map( (item) => {
       list = {
           value: item,
           rest: list
       }
    });

    return list;
};

const listToArray = (list) => {
    let arr = [];
    for(let node = list; node; node = node.rest) {
        arr.push(node.value);
    }

    return arr;
};

const prepend = (value, list) => {
    return {
        value: value,
        rest: list
    };
};

const nth = (list, n) => {
    if(!list) {
        return undefined;
    }

    if(n === 0) {
        return list.value;
    }

    return nth(list.rest, n-1);
};

module.exports = {
    arrayToList: arrayToList,
    toArray: listToArray,
    prepend: prepend,
    nth: nth
};
