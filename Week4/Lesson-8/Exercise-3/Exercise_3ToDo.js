document.querySelector('input.newToDo').value = ""   //clears the input box when the page reloads (goes to the <input> element and sets its value to empty quotations, which clears the value)

let list = document.querySelector('ul.list');   //sets the variable 'list' to the <ul> element with the class 'list'

document.querySelector('button.newToDo').addEventListener('click',function(){   //when the user clicks the <button> element with the class 'newToDo', this function will run
	let newText = document.querySelector("input.newToDo").value;   //sets variable 'newText' to the text that the user has put in the text box
	newItem = document.createElement('li');   //creates a new <li> element and assigns it to the variable 'newItem'
	newItem.innerHTML = newText;   //puts newText (the text from the input box) into the <li> element that we just created (newItem)
	list.appendChild(newItem);   //adds the <li> element, now containing the user's text, onto the list
	document.querySelector('input.newToDo').value = "";   //clears the input box
})

document.querySelector('ul').addEventListener('click',function(arg){   //adds an event listener to the whole list, waiting for any part of the list to be clicked
		(arg.target).style.textDecoration = 'line-through';   //arg.target references the element that triggered the eventListener, aka the list item that was clicked
		setTimeout(function(){(arg.target).remove()},1000)   //removes the list item that we clicked on (arg.target) after 1000ms
	})