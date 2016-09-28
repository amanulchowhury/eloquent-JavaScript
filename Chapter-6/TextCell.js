/**
 * Created by amanulchowdhury.
 */
let repeat = require('./repeat');

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        let line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

module.exports = TextCell;
