var header = document.getElementsByTagName("header")   //gets all the elements with the <header> tag
var section = document.querySelectorAll("section")   //gets all of the elements with the <section> tag

var current = document.querySelector('section.current')   //gets the first <section> element with the class of 'current'
console.log(current);
var afterCurrent = current.nextElementSibling   //gets the next sibling of 'current', the variable that we just defined
console.log(afterCurrent);
var beforeHTwo = current.previousElementSibling.children[0]   //goes to the proceding sibling of 'current' and gets the first child element
console.log(beforeHTwo);
var what = document.querySelector('h2.highlight').parentNode.parentNode   //finds the <h2> element with the class of 'highlight', then goes up two parents, first to <section>, then to <div>
console.log(what);
var who = (Array.from(document.querySelectorAll('section > h2'))).map(function(flomo){return flomo.parentNode})   //finds all of the <h2> elements whose parents are <section> elements, turns the resulting node list into an array, then maps the array to return the parent element of each <h2> element
console.log(who);