# Simple message reader
> Convert `ArrayBuffer` or `Blob` to string (Browser only)

[![Travis](https://img.shields.io/travis/poppinss/simple-message-reader.svg?style=for-the-badge)](https://github.com/poppinss/simple-message-reader)

The websocket or XHR requests now can return data as a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Using this package, you can conver them back to string.

```bash
npm i simple-message-reader
```

```js
const simpleMessageReader = require('simple-message-reader')
const ws = Websocket('...')

ws.on('message', (message) => {
  simpleMessageReader(message, (error, output) => {
    if (error) {
      console.log(error)
      return
    }

    console.log(output)
  })
})
```
