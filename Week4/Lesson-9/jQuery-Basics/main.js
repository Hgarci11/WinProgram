$("h1"); // Get the top-level header 
$("section").find("*"); //Get all the section elements
let current = $(".current"); // Get all the section element with class current
current.next(); //Get the section that comes after the current section
current.prev().find("h2")[0]; //Get the H2 node from the section before the 'current section'
$(".highlight").parent().parent();//Get the div that contains the section that has an h2 with a class of 'highlight'
let allH2 = Array.from($("section").find("h2")); //Get all the sections that contain an H2 and store them in an Array