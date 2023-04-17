const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let files = '';
  let count = 0;
  let hoh = [];
  for (let i = 0; i < names.length; i++){
    for (let j = i + 1;  j < names.length; j++) {
      if (names[i] === names[j]) {
        count += 1;
        let nameFile = names[j] + '('+ count.toString() +')';
        names.splice(j, 1, nameFile);
      }
    }
    count = 0;
  }
  return names;
}

module.exports = {
  renameFiles
};
