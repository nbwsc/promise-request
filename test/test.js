/*
promise test
*/

var pr = require('../index');


var options = {
    method: 'GET',
    url: 'https://api.github.com/repos/nbwsc/promise-request',
    headers:
    {
        'cache-control': 'no-cache',
        'User-Agent': 'request'
    }
};

pr(options).then((response) => {
    console.log(JSON.parse(response.body)['full_name']);
}, (err) => {
    console.error(err)
});
