/*
    async/await test
    require babel-core 
*/

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


