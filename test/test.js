/*
promise test
*/

var request = require('../index');


var options = {
    method: 'GET',
    url: 'https://api.github.com/repos/nbwsc/promise-request',
    headers:
    {
        'cache-control': 'no-cache',
        'User-Agent': 'request'
    }
};

request(options).then(function(response){
    console.log(JSON.parse(response.body)['full_name']);
}, (err) => {
    console.error(err)
});
