/**
 * Created by amanulchowdhury.
 */
module.exports = (arr, predicate) => {
    for(let i = 0; i < arr.length; i++) {
        if(!predicate(arr[i])){
            return false;
        }
    }

    return true;
};
