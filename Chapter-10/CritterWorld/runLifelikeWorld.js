/**
 * Created by amanulchowdhury.
 */

let LifelikeWorld = require('./world').LifelikeWorld,
    Wall = require('./basicEcosystem/Wall'),
    PlantEater = require('./ecosystem/PlantEater'),
    Plant = require('./ecosystem/Plant');

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
