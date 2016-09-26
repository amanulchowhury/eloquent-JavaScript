/**
 * Created by amanulchowdhury on 9/23/16.
 */

const createBoard = () => {
    let size = 8,
        board = '';

    for(let m = 0; m < size; m++) {
        for(let n = 0; n < size; n++) {
            if((m + n) % 2) {
                board += ' ';
            } else {
                board += '#';
            }
        }

        board += '\n';
    }

    console.log(board);
};

module.exports = createBoard;
