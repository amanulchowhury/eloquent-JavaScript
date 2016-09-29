/**
 * Created by amanulchowdhury.
 */

class ArraySeq {
    constructor (array) {
        this.pos = -1;
        this.array = array;
    }

    next() {
        if(this.pos >= this.array.length - 1) {
            return false;
        }

        this.pos++;
        return true;
    }

    current() {
        return this.array[this.pos];
    }
}

module.exports = ArraySeq;
