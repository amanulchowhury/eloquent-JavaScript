/**
 * Created by amanulchowdhury.
 */

const parseINI = (string) => {
    let currentSection = {
        name: null,
        fields: []
    },
        categories = [currentSection],
        commentRegex = /^\s*(;.*)?$/,
        sectionRegex = /^\[(.*)\]$/,
        settingRegex = /^(\w+)=(.*)$/;

    string.split(/\r?\n/).forEach( (item) => {
        let match;

        if(commentRegex.test(item)) {
            return;
        } else if(match = item.match(sectionRegex)) {
            currentSection = { name: match[1], fields: [] };
            categories.push(currentSection);
        } else if(match = item.match(settingRegex)) {
            currentSection.fields.push({ name: match[1], value: match[2] });
        } else {
            throw new Error(`Item: ${item} is invalid`);
        }
    });

    return categories;
};

module.exports = parseINI;
