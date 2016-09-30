/**
 * Created by amanulchowdhury.
 */

let UnderlinedCell = require('./UnderLineCell');
let RTextCell = require('./RTextCell');
let TextCell = require('./TextCell');
let StretchCell = require('./StretchCell');


function dataTable(data) {
    let keys = Object.keys(data[0]);
    let headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    
    let body = data.map(function(row) {
        return keys.map(function(name) {
            let value = row[name];

            if (typeof value == "number")
                return new StretchCell(new RTextCell(String(value)), 15, 2);
            else
                return new StretchCell(new TextCell(String(value)), 15, 2);
        });
    });

    return [headers].concat(body);
}

module.exports = dataTable;
