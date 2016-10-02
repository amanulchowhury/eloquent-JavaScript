/**
 * Created by amanulchowdhury.
 */

let clear = require('clear');
let World = require('./World');
let Wall = require('./Wall');
let BouncingCritter = require('./BouncingCritter');
let plan = require('./plan');

let legend = { '#': Wall, 'o': BouncingCritter };
let world = new World(plan, legend);


for(let i =0; i < 5; i++) {
    world.turn();
    console.log(world.toString());
}