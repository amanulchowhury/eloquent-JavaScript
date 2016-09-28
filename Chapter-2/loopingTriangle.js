/**
 * Created by amanulchowdhury.
 */

const loopingTriangle = () => {
    for(let line = '#'; line.length < 8; line += '#') {
        console.log(line);
    }
};

module.exports = loopingTriangle;
