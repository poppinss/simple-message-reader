'use strict'

/**
 * websocket-message-reader
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * Converts array buffer to string
 *
 * @method bufferToString
 *
 * @param  {ArrayBuffer}       buff
 * @param  {Function}          cb
 *
 * @return {void}
 */
function bufferToString (buff, cb) {
  cb(null, String.fromCharCode.apply(null, new Uint8Array(buff)))
}

/**
 * Reads blob to a string
 *
 * @method blobToString
 *
 * @param  {Blob}       input
 * @param  {Function}   cb
 *
 * @return {void}
 */
function blobToString (input, cb) {
  const reader = new window.FileReader()

  reader.onload = (event) => cb(null, event.target.result)
  reader.onerror = (event) => cb(event)
  reader.onabort = (event) => cb(event)

  reader.readAsArrayBuffer(input)
}

/**
 * Convert ArrayBuffer or Blob to a string, if
 * value is unknow, will be returned as it is
 *
 * @param  {Mixed}    input
 * @param  {Function} cb
 *
 * @return {Mixed}
 */
module.exports = function (input, cb) {
  if (input instanceof window.Blob === true) {
    return blobToString(input, cb)
  }

  if (ArrayBuffer.isView(input)) {
    return bufferToString(input, cb)
  }

  cb(null, input)
}
