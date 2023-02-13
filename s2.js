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
    let q1 = "What tag is used for Javascript?";
    let q2 = "What is the Javascript file extension?";
    let q3 = "How do you create a variable that doesn't change?";
    let a1 = "script";
    let a2 = ".js";
    let a3 = "const";

    let score = 0;

    let ua1 = prompt(q1);
    let ua2 = prompt(q2);
    let ua3 = prompt(q3);

    if (ua1 == a1) {
        // score++;
        // score += 1;
        score = score + 1;
    } else {
        alert("Your answer: " + ua1 + " Correct answer: " + a1);
    }
    if (ua2 == a2) {
        score++;
    } else {
        alert("Your answer: " + ua2 + " Correct answer: " + a2);
    }
    if (ua3 == a3) {
        score += 1;
    } else {
        alert("Your answer: " + ua3 + " Correct answer: " + a3);
    }

    quizGrader((score / 3) * 100);
}

alert( "Sample text to demonstrate".toLowerCase() );
alert( prompt("Your response WILL be lowercased").toLowerCase() );
//alert("You now have " + money + " dollars");