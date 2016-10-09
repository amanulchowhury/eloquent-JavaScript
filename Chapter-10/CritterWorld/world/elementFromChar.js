/**
 * Created by amanulchowdhury.
 */

const elementFromChar = function (legend, ch) {
    if(ch === ' ') {
        return null;
    }

    let el = new legend[ch]();
    el.originChar = ch;

    return el;
};

module.exports = elementFromChar;
