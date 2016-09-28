/**
 * Created by amanulchowdhury.
 */

const createRange = (start, end, step) => {
    let range = [];
    if(!step) {
        step = 1;
    }

    if(step > 0) {
        for(let i = start; i <= end; i += step) {
            range.push(i);
        }
    } else {
        for(let i = start; i >= end; i += step) {
            range.push(i);
        }
    }

    return range;
};

const sumofRange = (start, end) => {
    let sum = 0;

    createRange(start, end)
        .map((entry) => {
            sum += entry;
        });

    console.log('sum of range: ', sum);
};

module.exports = sumofRange;