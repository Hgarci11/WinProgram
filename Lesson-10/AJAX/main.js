$("#btn1").click(function() {
$.get("https://jsonplaceholder.typicode.com/posts/",function(posts){
    // console.log(posts);
    })
})

$("#btn2").click(function() {
$.get("https://jsonplaceholder.typicode.com/posts/10",function(posts){
    // console.log(posts);
    })
})

$("#btn3").click(function(){
$.get("https://jsonplaceholder.typicode.com/comments?postId=12",function(comments){
    console.log(comments);
    })
})

$.get("https://jsonplaceholder.typicode.com/posts?userId=2"),function(post){
    // console.log(post);
}


$("#btn5").click(function(){
$.post("https://jsonplaceholder.typicode.com/posts", {
    userId: 1,
    body: "Bacon ipsum dolor amet t-bone bresaola burgdoggen kielbasa meatball pancetta",
    title: "ipsum"
    
}), function(posts) {

}})