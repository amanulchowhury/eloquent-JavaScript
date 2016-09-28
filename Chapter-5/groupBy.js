/**
 * Created by amanulchowdhury.
 */

module.exports = (arr, groupingFn) => {
    let groups = {};

    arr.forEach((item) => {
        let groupNm = groupingFn(item);

        if(groupNm in groups) {
            groups[groupNm].push(item);
        } else {
            groups[groupNm] = [item];
        }
    });

    return groups;
};
