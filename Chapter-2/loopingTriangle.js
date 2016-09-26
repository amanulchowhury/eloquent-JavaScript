/**
 * Created by amanulchowdhury on 9/23/16.
 */

const loopingTriangle = () => {
    for(let line = '#'; line.length < 8; line += '#') {
        console.log(line);
    }
};

module.exports = loopingTriangle;
