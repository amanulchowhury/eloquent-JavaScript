/**
 * Created by amanulchowdhury.
 */
let Grid = require('./Grid');
let Vector = require('./Vector');
let elementFromChar = require('./elementFromChar');
let charFromElement = require('./charFromElement');

class World {
    constructor(map, legend) {
        this.grid = new Grid(map[0].length, map.length);
        this.legend = legend;

        this.initialize(map);
    }

    initialize(map) {
        map.forEach((line, y) => {
            for(let x = 0; x < line.length; x++) {
                this.grid.set(new Vector(x, y), elementFromChar(this.legend, line[x]));
            }
        })
    }

    toString() {
        let output = '';

        for(let y = 0; y < this.grid.height; y++) {
            for(let x = 0; x < this.grid.width; x++) {
                output += charFromElement(this.grid.get(new Vector(x, y)));
            }

            output += '\n';
        }

        return output;
    }
}

module.exports = World;
