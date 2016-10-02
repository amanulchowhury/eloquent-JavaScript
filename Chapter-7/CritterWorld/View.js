/**
 * Created by amanulchowdhury.
 */
let charFromElement = require('./charFromElement');
let directions = require('./directions');
let randomElement = require('./randomElement');

class View {
    constructor(world, vector) {
        this.world = world;
        this.vector = vector;
    }

    look(dir) {
        let target = this.vector.plus(directions[dir]);

        if(this.world.grid.isInside(target)) {
            return charFromElement(this.world.grid.get(target));
        } else {
            return '#';
        }
    }

    findAll(ch) {
        let found = [];

        for(let dir in directions) {
            if(this.look(dir)) {
                found.push(dir);
            }
        }

        return found;
    }

    find(ch) {
        let found = this.findAll(ch);

        if(found.length){
            return randomElement(found);
        } else {
            return null;
        }
    }
}

module.exports = View;