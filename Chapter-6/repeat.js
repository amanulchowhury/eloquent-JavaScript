/**
 * Created by amanulchowdhury.
 */

const repeat = (string, times) => {
    let result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
};

module.exports = repeat;
