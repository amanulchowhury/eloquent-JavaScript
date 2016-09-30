/**
 * Created by amanulchowdhury.
 */

class StretchCell {
    constructor(inner, width, height) {
        this.inner = inner;
        this.width = width;
        this.height = height;
    }

    minWidth() {
        return Math.max(this.inner.minWidth(), this.width);
    }

    minHeight() {
        return Math.max(this.inner.minHeight() + 1, this.height);
    }

    draw(width, height) {
        return this.inner.draw(width, height);
    }
}


module.exports = StretchCell;