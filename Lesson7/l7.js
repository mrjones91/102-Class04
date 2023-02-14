// test function to practice using input and check it's value
function bleep() {
    //create a variable that holds the value from our counter element
    let count = document.getElementById("counter").value;
    //if statement to check that the count fits our criteria
    if (count > 10 && count < 20) { //this checks if the count is between 10 and 20
        alert ('valid');
    } else {
        alert ('invalid entry');
    }
}
//create a function to validate email inputs
function emailValidation() {
    //create a variable to hold the value entered in the HTML element
    let email = document.getElementById("eField").value;
    //check if the email includes a @ and .
    if (email.includes('@') && email.includes('.')) {
        //true
        // additional code for this situation can go here
    } else {
        //false
        // additional code for this situation can go here
    }
    //email validation using split
    // emails are made of 3 parts, a username, a domain name, and a domain extension
    // dj       @ code-crew.org
    // username @ domain   . domain extension
    
    //splits the string on the @ and captures the front of that string segment
    let username = email.split('@')[0]; //email = dj@code-crew.org    username = dj
    //splits the string on the @ and captures the back half of that string segment
    let domain = email.split('@')[1]; //email = dj@code-crew.org    username = code-crew.org
    //splits the string on the . and captures the second half of that string segment
    let dxns = domain.split('.')[1]; //domain = code-crew.org    dxns = .org

    console.log("Username: " + username);
    console.log("Domain: " + domain);
    console.log("dxns: " + dxns);

    if (dxns == undefined) { // if there is nothing in the dxns variable, the domain didn't include a . with text after (example: dj@code-crew) and is not a valid email address
        alert('Invalid Email Address, Include a valid domain extension with your email');
    }
}