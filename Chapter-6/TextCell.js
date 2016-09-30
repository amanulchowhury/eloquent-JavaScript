/**
 * Created by amanulchowdhury.
 */
let repeat = require('./repeat');

class TextCell {
    constructor(text) {
        this.text = text.split("\n");
    }

    minWidth() {
        return this.text.reduce(function(width, line) {
            return Math.max(width, line.length);
        }, 0);
    }

    minHeight() {
        return this.text.length;
    }

    draw(width, height) {
        let result = [];
        for (let i = 0; i < height; i++) {
            let line = this.text[i] || "";
            result.push(line + repeat(" ", width - line.length));
        }
        return result;
    }
}

module.exports = TextCell;
