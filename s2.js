let apple = 1;
let myname = '';

function applepie() {
    let ingredientX = 5;
    console.log(apple);
}

let pie2 = function(cinnamon) {
    console.log(apple + cinnamon);
}

function whodat() {
    myname = prompt("What is your name?");
    if (myname != 'DJ') {
        alert('ERROR HACKER ERROR');
    } else {
        alert("Hello, " + myname);
    }
    
}


// applepie();

// pie2(9);

// console.log(ingredientX);

//whodat();
function gradeCheck() {
    let grade = prompt("Enter your grade:");

    if (grade <= 60) {
        alert("F!");
    } else if (grade <= 70) {
        alert("D!");
    } else if (grade <= 80) {
        alert("C!");
    } else if (grade <= 90) {
        alert("B!");
    } else if (grade <= 100) {
        alert("A!");
    }
}

function quizGrader(grade) {

    if (grade <= 60) {
        alert("F!");
    } else if (grade <= 70) {
        alert("D!");
    } else if (grade <= 80) {
        alert("C!");
    } else if (grade <= 90) {
        alert("B!");
    } else if (grade <= 100) {
        alert("A!");
    }
}

document.getElementById("checker").addEventListener("click", gradeCheck);

function quiz() {
    let q1 = "What tag is used for Javascript?".toLowerCase();
    let q2 = "What is the Javascript file extension?".toUpperCase();
    let q3 = "How do you create a variable that doesn't change?";
    let a1 = "script";
    let a2 = ".js";
    let a3 = "const";

    let score = 0;

    if (prompt(q1).toLowerCase == a1) {
        // score++;
        // score += 1;
        score = score + 1;
    }
    if (prompt(q2) == a2) {
        score++;
    }
    if (prompt(q3) == a3) {
        score += 1;
    }

    quizGrader((score / 3) * 100);
}

alert( "Sample text to demonstrate".toLowerCase() );
alert( prompt("Your response WILL be lowercased").toLowerCase() );
//alert("You now have " + money + " dollars");