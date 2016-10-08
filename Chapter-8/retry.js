/**
 * Created by amanulchowdhury.
 */

const MultiplicatorUnitFailure = () => { };

const primitiveMultiply = (a, b) => {
    if(Math.random() < 0.5) {
        return a * b;
    }

    throw new MultiplicatorUnitFailure();
};

const reliableMultiply = (a, b) => {
    for(; ;) {
        try {
            return primitiveMultiply(a, b);
        } catch(e) {
            if(!(e instanceof MultiplicatorUnitFailure)) {
                throw e;
            }
        }
    }
};

module.exports = reliableMultiply;
