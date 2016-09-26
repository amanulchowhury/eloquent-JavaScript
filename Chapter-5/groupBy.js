/**
 * Created by amanulchowdhury on 9/25/16.
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
