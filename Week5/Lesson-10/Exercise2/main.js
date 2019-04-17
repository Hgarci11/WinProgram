let userName = document.querySelector('input#userName')
let submit = document.querySelector('button[type="submit"]')
submit.addEventListener("click", event => {
    //executor 
} )

function findUser(userName) {
    return new Promise(function(resolve, reject){
        $.get("http://jsonplaceholder.typicode.com/users?username= " + userName, function(user){
            if(user.lenght) resolve (user[0])
            else reject("it's wrong");
        })
    })
}

function getUserPosts(user){
    return new Promise(function(resolve,reject){
        $.get("http://jsonplaceholder.typicode.com/posts?username= ") + user.Id, 
        function(posts) {
            resolve (posts)
        })
    })
}