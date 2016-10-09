/**
 * Created by amanulchowdhury.
 */

let randomElement = require('./randomElement');
let directions = require('./../grid/directionNames');

class BouncingCritter {
    constructor() {
        this.direction = randomElement(directions);
    }

    act(view) {
        if(view.look(this.direction) !== ' ') {
            this.direction = view.find(' ') || 's';
        }

        return { type: 'move', direction: this.direction };
    }
}

module.exports = BouncingCritter;
