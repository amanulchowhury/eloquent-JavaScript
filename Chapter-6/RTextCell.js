/**
 * Created by amanulchowdhury.
 */

let TextCell = require('./TextCell');
let repeat = require('./repeat');

function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function(width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        let line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

module.exports = RTextCell;
