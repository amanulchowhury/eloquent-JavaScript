/**
 * Created by amanulchowdhury.
 */

let Vector = require('./Vector');

class Grid {
    constructor(width, height) {
        this.space = new Array(width * height);
        this.width = width;
        this.height = height;
    }

    get(vector) {
        return this.space[vector.x + (this.width * vector.y)];
    }

    set(vector, value) {
        this.space[vector.x + (this.width * vector.y)] = value;
    }

    forEach(f) {
        for(let y = 0; y < this.height; y++) {
            for(let x = 0; x < this.width; x++) {
                let value = this.space[ x + y * this.width ];

                if(value) {
                    f(value, new Vector(x, y));
                }
            }
        }
    }

    isInside(vector) {
        return vector.x >= 0 && vector.x <= this.width &&
                vector.y >=0 && vector.y <= this.height;
    }
}

module.exports = Grid;
