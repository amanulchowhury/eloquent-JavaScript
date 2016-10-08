/**
 * Created by amanulchowdhury.
 */

class PlantEater {
    constructor() {
        this.energy = 20;
        this.direction = 'e';
    }

    act(view) {
        let space = view.find(' ');

        if(this.energy > 90 && space) {
            return { type: 'reproduce', direction: space };
        }

        let plant = view.findAll('*');

        if(plant.length > 1) {
            return { type: 'eat', direction: plant };
        }

        if(view.look(this.direction) !== ' ' && space) {
            return { type: 'move', direction: space };
        }
    }
}

module.exports = PlantEater;
