/**
 * Created by amanulchowdhury.
 */
const ancestryData = require('./ancestry'),
    ancestry = JSON.parse(ancestryData),
    average = require('./average');

const ageDiff = () => {
    let byName = { };

    ancestry.forEach((person) => {
        byName[person.name] = person;
    });

    let diffs = ancestry
        .filter((person) => {
            return !!byName[person.mother];
        })
        .map((person) => {
            return person.born - byName[person.mother].born;
        });

    return average(diffs);
};

module.exports = ageDiff;