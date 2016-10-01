/**
 * Created by amanulchowdhury.
 */

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

    isInside(vector) {
        return vector.x >= 0 && vector.x <= this.width &&
                vector.y >=0 && vector.y <= this.height;
    }
}

module.exports = Grid;
