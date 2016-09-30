/**
 * Created by amanulchowdhury.
 */

let TextCell = require('./TextCell');
let repeat = require('./repeat');

class RTextCell extends TextCell {
    constructor(text) {
        super(text);
    }

    draw(width, height) {
        let result = [];
        for (let i = 0; i < height; i++) {
            let line = this.text[i] || "";
            result.push(repeat(" ", width - line.length) + line);
        }
        return result;
    }
}

module.exports = RTextCell;
