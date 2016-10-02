/**
 * Created by amanulchowdhury.
 */

let World = require('./World'),
    Wall = require('./Wall'),
    BouncingCritter = require('./BouncingCritter'),
    plan = require('./plan');

let legend = { '#': Wall, 'o': BouncingCritter };
let world = new World(plan, legend);


for(let i =0; i < 5; i++) {
    world.turn();
    console.log(world.toString());
}