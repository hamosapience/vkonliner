var got = require('got');
var fs = require('fs');
var objectAssign = require('object-assign');

var config = fs.readFileSync('config.json');
var accessToken = process.env.ACCESS_TOKEN || config.access_token;

var method = 'account.setOnline';

var API_URL_BASE = 'https://api.vk.com/method/';

function exec(config, method, params){
    return (
        new Promise(function(resolve, reject){
            got(API_URL_BASE + method, {
                query: objectAssign({
                    access_token: accessToken
                }, params || {})
            }, function(err, data){
                if (err){
                    reject(err);
                }
                resolve(data);
            });
        })
    );
}

exec(config, method, {})
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log('ERROR ' + error);
    });

