//function to run our loop 

function loop() {
    //create a variable to hold how many times our loop will repeat
    let counter = document.getElementById('counter').value;
    //create variables that contain what we will repeat on the page
    let strings = "Repeat This <br/><br/>";
    let image = "<img src='C.png'/>";
    
    //while loop counting down to 0 from our input field number
    while (counter > 0) {
        //add the strings variable text to the div with id loopSection
        document.getElementById('loopSection').innerHTML += strings;
        //add the image variable with the HTML tag for our image to the div with id loopSection
        document.getElementById('loopSection').innerHTML += image;
        //update the counter so that we end up at 0 as we count down
        counter --;
    }
}