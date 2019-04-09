
var list = document.getElementById('list')   //sets the variable 'list' equal to the location of the list in the html

list.children[1].innerHTML = 'Fair Trade Coffee'   //goes to the item in the list with the index of [1] and changes its text to 'Fair Trade Coffee'

list.children[3].remove();   //goes to the item in the list with the index of [3] and removes it

const whiz = document.createElement('li')   //creates a new <li> element and assigns it to the variable 'whiz'
whiz.innerHTML = 'Cheese Whiz'   //changes the text in the newly created <li> element to 'Cheese Whiz'
list.appendChild(whiz)   //adds the new <li> element to the list

list.innerHTML = ""   //clears the list
const newItems = ['protein powder', 'muscle milk', 'power bars']   //creates an array with 3 strings and assigns it to the variable 'newItems'
function add(array){   //this function takes in an array as an argument
	for(let i=0;i<array.length;i++){   //run the function for every item in the array
		let addition = document.createElement('li');   //creates a new <li> element and assigns it to the variable 'addition'
		addition.innerHTML = array[i];   //puts the string from the array with the index of [i] into the new <li> element
		list.appendChild(addition);   //adds the <li> element, that now contains a string from the array, onto the list
	}
}add(newItems);   //runs the function and takes in the 'newItems' array that we created earlier

list.children[1].setAttribute('class','important')   //goes to the item in the list with the index of [1], creates a class attribute for it, and sets it equal to 'important'