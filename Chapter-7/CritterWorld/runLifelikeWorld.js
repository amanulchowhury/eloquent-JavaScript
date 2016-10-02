/**
 * Created by amanulchowdhury.
 */

let LifelikeWorld = require('./LifelikeWorld'),
    Wall = require('./Wall'),
    PlantEater = require('./PlantEater'),
    Plant = require('./Plant');

let legend = { "#": Wall, "O": PlantEater, "*": Plant };

let valley = new LifelikeWorld(
    ["############################",
        "#####                 ######",
        "##   ***                **##",
        "#   *##**         **  O  *##",
        "#    ***     O    ##**    *#",
        "#       O         ##***    #",
        "#                 ##**     #",
        "#   O       #*             #",
        "#*          #**       O    #",
        "#***        ##**    O    **#",
        "##****     ###***       *###",
        "############################"],
    legend
);

for(let i =0; i < 5; i++) {
    valley.turn();
    console.log(valley.toString());
}
