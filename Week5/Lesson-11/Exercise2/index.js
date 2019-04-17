const Moment = require('moment');
const Request = require ('request-promise');


function logResponse(resp) {
    console.log(resp, new Moment().format('h:mm:ss a'));
}

setInterval(function(){
Request("http://jsonplaceholder.typicode.com/posts/1")
.then(logResponse);
}, 3000);
