

$(document).ready(function(){
    $('#submit').on('click', function() {
//Created variables for each of the form inputs
        const name = $('#name');
        const email = $('#email');
        const message = $('#message');
        const phone = $('#phone');

        const required = [name, email,phone]; //Created an array named 'required' and stored the variables name,email, and phone number

        for (let i=0; i< required.length; i++) { //Utilized a 'for' loop to iterate of the entire required array

            if (required[i].val() === "") // if statement used to check the value of each array item
            {   
                $(message).text("Please Fill Out Required Fields").addClass('warning'); //if the array item is empty populate the message and add the warning class
                required[i].prev().addClass('warning'); //attacht warning class to the array of items <label>
                
            } else {
                required[i].prev().removeClass('warning'); //Once the field is filed in remove the warning class
            }
        }

        if (!$('#form label').hasClass('warning')) { //verify that no <label>'s have the warning class
            $('#form')[0].remove(); //remove the form from the DOM
            $('#pre-form h2').text("Thank for your feedback!") //manipulate the <h2> to say: "Thanks for your feedback!"
        }
    })
})