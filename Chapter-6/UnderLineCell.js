/**
 * Created by amanulchowdhury.
 */

let repeat = require('./repeat');

class UnderlinedCell {
    constructor(inner) {
        this.inner = inner;
    }

    minWidth() {
        return this.inner.minWidth();
    }

    minHeight() {
        return this.inner.minHeight() + 1;
    }

    draw(width, height) {
        return this.inner.draw(width, height - 1)
            .concat([repeat("-", width)]);
    }
}

module.exports = UnderlinedCell;
