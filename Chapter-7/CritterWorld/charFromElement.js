/**
 * Created by amanulchowdhury.
 */

const charFromEl = function (el) {
    if(!el) {
        return ' ';
    }

    return el.originChar;
};

module.exports = charFromEl;
