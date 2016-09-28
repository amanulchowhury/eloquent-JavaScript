/**
 * Created by amanulchowdhury.
 */
const isEven = num => {
  if(num === 0) {
      return true;
  } else if(num === 1) {
      return false;
  } else if(num < 0) {
      return isEven(-num);
  } else {
      return isEven(num - 2);
  }
};

module.exports = isEven;
