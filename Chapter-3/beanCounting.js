/**
 * Created by amanulchowdhury.
 */

const countChar = (str, char) => {
    let counted = 0;

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === char) {
            counted++;
        }
    }

    return counted;
};

const countB = str => countChar(str, 'B');

module.exports = countB;
