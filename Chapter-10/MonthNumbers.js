/**
 * Created by amanulchowdhury.
 */

(function(exports) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    exports.name = (number) => {
        return months[number];
    };

    exports.number = (name) => {
        return months.indexOf(name);
    };
}( this.Months = { }));
