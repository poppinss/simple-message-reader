'use strict'

/**
 * websocket-message-reader
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import { isBlob, isArrayBuffer, parseBlob, parseArrayBuffer } from '../index'

group('Array buffer', () => {
  test('return true when input is blob', (assert) => {
    assert.isTrue(isBlob(new window.Blob()))
  })

  test('return true when input is Uint8Array', (assert) => {
    assert.isTrue(isArrayBuffer(new window.Uint8Array()))
  })

  test('read array buffer to string', (assert) => {
    const buff = new Uint8Array([72, 101, 108, 108, 111, 32, 33])
    const result = parseArrayBuffer(buff)
    assert.equal(result, 'Hello !')
  })

  test('read array buffer blob to Uint8Array', (assert, done) => {
    const buff = new window.Blob([new Uint8Array([72, 101, 108, 108, 111, 32, 33])])

    parseBlob(buff, (error, result) => {
      if (error) { return done(error) }
      assert.equal(parseArrayBuffer(result), 'Hello !')
      done()
    })
  })

  test('return error when outputFormat is not allowed', (assert, done) => {
    const buff = new window.Blob([new Uint8Array([72, 101, 108, 108, 111, 32, 33])])

    parseBlob(buff, (error, result) => {
      assert.equal(error.message, 'hello is not supported. Only arrayBuffer,binaryString,dataURL,text are allowed')
      done()
    }, 'hello')
  })

  test('return text from blob', (assert, done) => {
    const buff = new window.Blob([new Uint8Array([72, 101, 108, 108, 111, 32, 33])])

    parseBlob(buff, (error, result) => {
      if (error) { return done(error) }
      assert.equal(result, 'Hello !')
      done()
    }, 'text')
  })
})
