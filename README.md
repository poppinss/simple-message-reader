# Simple message reader
> Convert `ArrayBuffer` or `Blob` to string (Browser only)

[![Travis](https://img.shields.io/travis/poppinss/simple-message-reader.svg?style=for-the-badge)](https://github.com/poppinss/simple-message-reader)

The websocket or XHR requests now can return data as a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Using this package, you can conver them back to string.

```bash
npm i simple-message-reader
```

Pull from CDN

```html
<script src="https://unpkg.com/simple-message-reader"></script>
```

```js
import { isBlob, isArrayBuffer, parseBlob, parseArrayBuffer } from 'simple-message-reader'

// from CDN
const simpleMessageReader = window.simpleMessageReader
```

## API

## Constants

<dl>
<dt><a href="#acceptedTypesMap">acceptedTypesMap</a> : <code>Object</code></dt>
<dd><p>List of output formats accepted when parsing
blobs</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isBlob">isBlob(input)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns a boolean telling if value is blob or
not</p>
</dd>
<dt><a href="#isArrayBuffer">isArrayBuffer(input)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns a boolean telling if value is any of
the ArrayBuffer view or not</p>
</dd>
<dt><a href="#parseBlob">parseBlob(input, cb, [outputFormat])</a> ⇒ <code>void</code></dt>
<dd><p>Parses the blob to any of the accepted outputFormat types.</p>
<p>Callback will be called with error, if <code>outputFormat</code> is invalid
or <code>input</code> is not a blob.</p>
</dd>
<dt><a href="#parseArrayBuffer">parseArrayBuffer(input)</a> ⇒ <code>String</code></dt>
<dd><p>Parses the arrayBuffer to a string</p>
</dd>
</dl>

<a name="acceptedTypesMap"></a>

## acceptedTypesMap : <code>Object</code>
List of output formats accepted when parsing
blobs

**Kind**: global constant  
**Attribute**: acceptedTypesMap  
**Example**  
```js
['arrayBuffer', 'binaryString', 'dataURL', 'text']
```
<a name="isBlob"></a>

## isBlob(input) ⇒ <code>Boolean</code>
Returns a boolean telling if value is blob or
not

**Kind**: global function  

| Param | Type |
| --- | --- |
| input | <code>Blob</code> | 

**Example**  
```js
isBlob(new Blob())
```
<a name="isArrayBuffer"></a>

## isArrayBuffer(input) ⇒ <code>Boolean</code>
Returns a boolean telling if value is any of
the ArrayBuffer view or not

**Kind**: global function  

| Param | Type |
| --- | --- |
| input | <code>ArrayBufferView</code> | 

**Example**  
```js
isArrayBuffer(new Uint8Array())
```
<a name="parseBlob"></a>

## parseBlob(input, cb, [outputFormat]) ⇒ <code>void</code>
Parses the blob to any of the accepted outputFormat types.

Callback will be called with error, if `outputFormat` is invalid
or `input` is not a blob.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| input | <code>Blob</code> |  | 
| cb | <code>function</code> |  | 
| [outputFormat] | <code>String</code> | <code>&#x27;arrayBuffer&#x27;</code> | 

**Example**  
```js
parseBlob(new Blob(), function (error, output) {

}, 'arrayBuffer')
```
<a name="parseArrayBuffer"></a>

## parseArrayBuffer(input) ⇒ <code>String</code>
Parses the arrayBuffer to a string

**Kind**: global function  

| Param | Type |
| --- | --- |
| input | <code>ArrayBufferView</code> | 

**Example**  
```js
parseArrayBuffer(new Uint8Array([72, 101, 108, 108, 111, 32, 33])
```
