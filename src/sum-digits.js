const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {

    let sum = 0;
    let str = String(n);
    let summ = 0;
    for(let i = 0; i < str.length; i++) sum += Number(str[i]);
    if (sum >= 10) {
        let strr = String(sum);
       for(let i = 0; i < strr.length; i++) summ += Number(strr[i]);
      return summ;
    } 
    return sum;
}

module.exports = {
  getSumOfDigits
};
