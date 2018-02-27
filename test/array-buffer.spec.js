'use strict'

/**
 * websocket-message-reader
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const simpleMessageReader = require('..')

group('Array buffer', () => {
  test('read array buffer to string', (assert, done) => {
    const buff = new Uint8Array([72, 101, 108, 108, 111, 32, 33])
    simpleMessageReader(buff, (error, result) => {
      if (error) { return done(error) }
      assert.equal(result, 'Hello !')
      done()
    })
  })

  test('read array buffer blob to string', (assert, done) => {
    const buff = new window.Blob([new Uint8Array([72, 101, 108, 108, 111, 32, 33])])
    simpleMessageReader(buff, (error, result) => {
      if (error) { return done(error) }
      assert.equal(result, 'Hello !')
      done()
    })
  })

  test('return input back when null', (assert, done) => {
    simpleMessageReader(null, (error, result) => {
      if (error) { return done(error) }
      assert.isNull(result)
      done()
    })
  })

  test('return input back when is string', (assert, done) => {
    simpleMessageReader('Hello !', (error, result) => {
      if (error) { return done(error) }
      assert.equal(result, 'Hello !')
      done()
    })
  })
})
