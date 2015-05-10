var vkonliner = require('./vkonliner');

var INTERVAL = 3 * 60 * 1000;

setInterval(function(){
    try {
        vkonliner();
    }
    catch (e){
        console.log("ERROR " + e);
    }
}, INTERVAL);

vkonliner();

