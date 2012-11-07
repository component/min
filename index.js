
/**
 * Module dependencies.
 */

var toFunction = require('to-function');

/**
 * Return the min value in `arr` with optional callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} [fn]
 * @return {Number}
 * @api public
 */

module.exports = function(arr, fn){
  var min;

  if (fn) {
    fn = toFunction(fn);
    for (var i = 0; i < arr.length; ++i) {
      var ret = fn(arr[i], i);
      if (null == min) min = ret;
      min = ret < min
        ? ret
        : min;
    }
  } else {
    for (var i = 0; i < arr.length; ++i) {
      if (null == min) min = arr[i];
      min = arr[i] < min
        ? arr[i]
        : min;
    }
  }

  return min;
};