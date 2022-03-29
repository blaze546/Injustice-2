/*document.querySelector('#standard').addEventListener(click, standard)*/
document.querySelector('#superman').addEventListener('click', superman)
document.querySelector('#flash').addEventListener('click', flash)
document.querySelector('#capcold').addEventListener('click', capcold)
document.querySelector('#greenarrow').addEventListener('click', greenarrow)
document.querySelector('#greenlantern').addEventListener('click', greenlantern)
document.querySelector('#bluebettle').addEventListener('click', bluebettle)
document.querySelector('#blackadam').addEventListener('click', blackadam)

function superman() {
    document.querySelector("#standard").src = "images/superman.jpeg";
}

function flash() {
    document.querySelector("#standard").src = "images/flash.jpeg";
}

function capcold() {
    document.querySelector("#standard").src = "images/captincold.jpg";
}
function greenarrow() {
    document.querySelector("#standard").src = "images/greenArrow.jpg";
}

function greenlantern() {
    document.querySelector("#standard").src = "images/greenlantern.jpg";
}

function bluebettle() {
    document.querySelector("#standard").src = "images/Bluebettle.jpg";
}

function blackadam() {
    document.querySelector("#standard").src = "images/BlackAdam.jpg";
}