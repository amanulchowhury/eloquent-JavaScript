/**
 * Created by amanulchowdhury.
 */

class ExtractDate {
    constructor() {
        this.regex = /(^\d{1,2})-(\d{1,2})-(\d{4}$)/;
    }

    toDate(str) {
        let match = this.regex.exec(str);

        return new Date(Number(match[3]), Number(match[2] - 1), Number(match[1]));
    }
}


module.exports = ExtractDate;
