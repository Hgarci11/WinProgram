//$('#circle').click(function(){
  //  $('img').attr('src', 'https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_16x9_992.jpg')
    //console.log("clicked")
//});

//$('#circle').click(function(){
  //  alert('Clicked!');
//});

$('#circle').hover(function(){
    $('p').html("Hello world!");
});


$('.square').click(function(){
    $(this).css('background-color', 'orange');
})