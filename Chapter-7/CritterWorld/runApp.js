/**
 * Created by amanulchowdhury.
 */

let World = require('./World');
let Wall = require('./Wall');
let BouncingCritter = require('./BouncingCritter');
let plan = require('./plan');

let legend = { '#': Wall, 'o': BouncingCritter };
let world = new World(plan, legend);


console.log(world.toString());

console.log(world.toString());

for(let i =0; i < 25; i++) {
    world.turn();
    console.log(world.toString());
}