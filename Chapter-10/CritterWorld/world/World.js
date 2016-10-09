/**
 * Created by amanulchowdhury.
 */
let Grid = require('./../grid/Grid');
let Vector = require('./../grid/Vector');
let elementFromChar = require('./elementFromChar');
let charFromElement = require('./charFromElement');
let directions = require('./../grid/directions');
let View = require('./View');

class World {
    constructor(map, legend) {
        this.grid = new Grid(map[0].length, map.length);
        this.legend = legend;

        this.initialize(map);
    }

    initialize(map) {
        // create grid object for each item in the string.
        map.forEach((line, y) => {
            for(let x = 0; x < line.length; x++) {
                this.grid.set(new Vector(x, y), elementFromChar(this.legend, line[x]));
            }
        })
    }

    turn() {
        let acted = [];
        this.grid.forEach((critter, vector) => {
            if(critter.act && acted.indexOf(critter) === -1) {
                acted.push(critter);
                this.letAct(critter, vector);
            }
        });
    }

    letAct(critter, vector) {
        let action = critter.act(new View(this, vector));

        if(action && action.type === 'move') {
            let dest = this.checkDestination(action, vector);

            if(dest && this.grid.get(dest) === null) {
                this.grid.set(vector, null);
                this.grid.set(dest, critter);
            }
        }
    }

    checkDestination(action, vector) {
        if(directions.hasOwnProperty(action.direction)) {
            let dest = vector.plus(directions[action.direction]);

            if(this.grid.isInside(dest)) {
                return dest;
            }
        }
    }

    toString() {
        let output = '';

        for(let y = 0; y < this.grid.height; y++) {
            for(let x = 0; x < this.grid.width; x++) {
                // it works here because of ES6 lexical scope for this.
                output += charFromElement(this.grid.get(new Vector(x, y)));
            }

            output += '\n';
        }

        return output;
    }
}

module.exports = World;
