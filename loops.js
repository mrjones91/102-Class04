

function loop() {
    let counter = document.getElementById('counter').value;

    let strings = "Repeat This <br/><br/>";
    let image = "<img src='C.png'/>";
    
    while (counter > 0) {
        document.getElementById('loopSection').innerHTML += strings;
        document.getElementById('loopSection').innerHTML += image;
        counter --;
    }
}