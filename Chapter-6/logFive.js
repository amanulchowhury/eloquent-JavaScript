/**
 * Created by amanulchowdhury.
 */

module.exports = function logFive(sequence) {
    for(let i = 0; i < 5; i++) {
        if(!sequence.next()) {
            break;
        }

        console.log(sequence.current());
    }
};
