/**
 * websocket-message-reader
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * List of output formats accepted when parsing
 * blobs
 *
 * @type {Object}
 *
 * @attribute acceptedTypesMap
 *
 * @example
 * ```js
 * ['arrayBuffer', 'binaryString', 'dataURL', 'text']
 * ```
 */

var acceptedTypesMap = {
  'arrayBuffer': 'readAsArrayBuffer',
  'binaryString': 'readAsBinaryString',
  'dataURL': 'readAsDataURL',
  'text': 'readAsText'

  /**
   * Returns a boolean telling if value is blob or
   * not
   *
   * @method isBlob
   *
   * @param  {Blob}  input
   *
   * @return {Boolean}
   *
   * @example
   * ```js
   * isBlob(new Blob())
   * ```
   */
};function isBlob(input) {
  return input instanceof window.Blob === true;
}

/**
 * Returns a boolean telling if value is any of
 * the ArrayBuffer view or not
 *
 * @method isArrayBuffer
 *
 * @param  {ArrayBufferView}      input
 *
 * @return {Boolean}
 *
 * @example
 * ```js
 * isArrayBuffer(new Uint8Array())
 * ```
 */
function isArrayBuffer(input) {
  return ArrayBuffer.isView(input);
}

/**
 * Parses the blob to any of the accepted outputFormat types.
 *
 * Callback will be called with error, if `outputFormat` is invalid
 * or `input` is not a blob.
 *
 * @method parseBlob
 *
 * @param  {Blob}     input
 * @param  {Function} cb
 * @param  {String}   [outputFormat = 'arrayBuffer']
 *
 * @return {void}
 *
 * @example
 * ```js
 * parseBlob(new Blob(), function (error, output) {
 *
 * }, 'arrayBuffer')
 * ```
 */
function parseBlob(input, cb, outputFormat) {
  var acceptedTypes = Object.keys(acceptedTypesMap);
  outputFormat = outputFormat || 'arrayBuffer';

  if (acceptedTypes.indexOf(outputFormat) === -1) {
    cb(new Error(outputFormat + ' is not supported. Only ' + acceptedTypes.join(',') + ' are allowed'));
    return;
  }

  if (!isBlob(input)) {
    cb(new Error('Input must be blob'));
    return;
  }

  var reader = new window.FileReader();
  reader.onload = function (event) {
    return cb(null, event.target.result);
  };
  reader.onerror = function (event) {
    return cb(event);
  };
  reader.onabort = function (event) {
    return cb(event);
  };
  reader[acceptedTypesMap[outputFormat]](input);
}

/**
 * Parses the arrayBuffer to a string
 *
 * @method parseArrayBuffer
 *
 * @param  {ArrayBufferView}         input
 *
 * @return {String}
 *
 * @example
 * ```js
 * parseArrayBuffer(new Uint8Array([72, 101, 108, 108, 111, 32, 33])
 * ```
 */
function parseArrayBuffer(input) {
  return String.fromCharCode.apply(null, new Uint8Array(input));
}

export { isBlob, isArrayBuffer, parseBlob, parseArrayBuffer };
