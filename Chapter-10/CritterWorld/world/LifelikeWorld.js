/**
 * Created by amanulchowdhury.
 */

let World = require('./World');
let View = require('./View');
let ActionTypes = require('./../ActionTypes');

const actionTypes = new ActionTypes();

class LifelikeWorld extends World {
    constructor(map, legend) {
        super(map, legend);
    }

    letAct(critter, vector) {
        let action = critter.act(new View(this, vector));
        let handled = action && action.type in actionTypes && actionTypes[action.type].call(this, critter, vector, action);

        if(!handled) {
            critter.energy -= 0.2;
            if(critter.energy <= 0) {
                this.grid.set(vector, null);
            }
        }
    }
}

module.exports = LifelikeWorld;
