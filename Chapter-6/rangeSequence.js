/**
 * Created by amanulchowdhury.
 */

class RangeSeq {
    constructor(from, to) {
        this.pos = from - 1;
        this.to = to;
    }

    next() {
        if(this.pos >= this.to) {
            return false;
        }

        this.pos++;
        return true;
    }

    current() {
        return this.pos;
    }
}


module.exports = RangeSeq;
