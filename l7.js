function bleep() {
    let count = document.getElementById("counter").value;
    if (count > 10 && count < 20) {
        alert ('valid');
    } else {
        alert ('invalid entry');
    }
}
function emailValidation() {
    let email = document.getElementById("eField").value;

    if (email.includes('@') && email.includes('.')) {
        //true

    } else {
        //false
    }
    // dj @ code-crew.org
    let username = email.split('@')[0];
    let domain = email.split('@')[1];
    let dns = domain.split('.')[1];

    console.log("Username: " + username);
    console.log("Domain: " + domain);
    console.log("dns: " + dns);

    if (1 !== '1') {
        alert('Invalid Email Address, Include a valid domain extension with your email');
    }
}