/**
 * Created by amanulchowdhury.
 */

let randomElement = require('./../world/randomElement');

class Predator {
    constructor() {
        this.energy = 100;
        this.direction = 'w';
        // keep # of prey seen every 6 turns
        this.preySeen = [];
    }

    act(view) {
        let seenPerTurn = this.preySeen.reduce((a, b) => {
            return a + b;
        }, 0) / this.preySeen.length;

        let prey = view.findAll('o');
        this.preySeen.push(prey);

        if(this.preySeen.length > 6) {
            this.preySeen.shift();
        }

        //only eat if you see more 1/4 prey every turn
        if(prey.length && seenPerTurn > 0.25) {
            return { type: 'eat', direction: randomElement(prey) };
        }

        let space = view.find(' ');

        //reproduce only if energy is more than 400 and there is an empty space available.
        if(this.energy > 400 && space) {
            return { type: 'reproduce', direction: space };
        }

        if(view.look(this.direction) !== ' ' && space) {
            this.direction = space;

            return { type: 'move', direction: this.direction };
        }
    }
}

module.exports = Predator;
