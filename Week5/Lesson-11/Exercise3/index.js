const Moment = require("moment");
const Request = require("request-promise");

class DataAcess {
    constructor(){

    }
    getPost(postId) {
        return Request("http://jsonplaceholder.typicode.com/posts/1" + postId);
    }
}

class TimeStamp {
    constructor() {

    }

    getTime() {
        return new Moment().format("h:mm:ss a");
    }
}

module.exports = {
    DataAcess,
    TimeStamp
};