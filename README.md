# promise_request

[![Build Status](https://travis-ci.org/nbwsc/promise-request.svg?branch=master)](https://travis-ci.org/nbwsc/promise-request)

FEATURE
===========
* It gives you a fully-fledged promise
* For aysnc/await usage
* Based on request module and native Promise

INSTALL
===========
```bash
npm install promise_request
```
TEST
===========

```bash
npm test
```
or
```bash
node test/test.js

node test/testAsync.index.js
#this require babel-core & babel-preset-stage-3 to use aysnc/await
```
HOW TO
===========
```javascript
//eg.
var request = require('promise_request');

var options = {
    method: 'GET',
    url: 'https://api.github.com/repos/nbwsc/promise-request',
    headers:
    {
        'cache-control': 'no-cache',
        'User-Agent': 'request'
    }
};

request(options).then((response) => {
    console.log(JSON.parse(response.body)['full_name']);
}, (err) => {
    console.error(err)
});

```
```
const request = require('../index');
(async () => {

    async function task() {
        let options = {
            method: 'GET',
            url: 'https://api.github.com/repos/nbwsc/promise-request',
            headers:
            {
                'cache-control': 'no-cache',
                'User-Agent': 'request'
            }
        };
        let resp = await request(options)
        return JSON.parse(resp.body);
    }

    console.log(`task starting...`);

    let res = await task();
    console.log(`this is ${res['full_name']}`)

    
    console.log(`task ending`);

})()



```

LICENSE
===========
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
