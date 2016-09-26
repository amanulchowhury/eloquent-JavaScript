/**
 * Created by amanulchowdhury on 9/25/16.
 */
const ancestryData = require('./ancestry'),
    ancestry = JSON.parse(ancestryData),
    average = require('./average'),
    groupBy = require('./groupBy');

const calculateLifeExpectancy = () => {
    let expectencies = {};

    let byCentury = groupBy(ancestry, (person) => {
        return Math.ceil(person.died / 100);
    });

    for(let century in byCentury) {
        let ages = byCentury[century].map((person) => {
            return person.died - person.born;
        });

        expectencies[century] = average(ages).toFixed(2);
    }

    return expectencies;
};

module.exports = calculateLifeExpectancy;



