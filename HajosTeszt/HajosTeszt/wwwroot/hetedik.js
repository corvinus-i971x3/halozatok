var kérdések;
var kerdID = 0;

window.onload = () => {
    letöltés()    
}

function letöltés() {
fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;

    kérdésMegjelenítés(kerdID)
}

function kérdésMegjelenítés(kérdID) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdID].questionText;

    document.getElementById("válasz1").innerHTML = kérdések[kérdID].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdID].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdID].answer3;

    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdID].image;
    
}

function back(){
    kerdID--;
    if (kerdID == -1) {
        kerdID = kérdések.length-1
    }
    kérdésMegjelenítés(kerdID)

    visszaSzinezes();
}

function next() {
    kerdID++;
    if (kerdID == kérdések.length) {
        kerdID = 0;
    }
    kérdésMegjelenítés(kerdID)

    visszaSzinezes();
}

function visszaSzinezes() {
    var elem = document.getElementById("válasz1");
    elem.classList.remove("jó");
    elem.classList.remove("rossz");
    elem.classList.add("kattintható");
    elem = document.getElementById("válasz2");
    elem.classList.remove("jó");
    elem.classList.remove("rossz");
    elem.classList.add("kattintható");
    elem = document.getElementById("válasz3");
    elem.classList.remove("jó");
    elem.classList.remove("rossz");
    elem.classList.add("kattintható");
}

function szinezés (labelID) {
    if (kérdések[kerdID].correctAnswer == 1) {
        var elem = document.getElementById("válasz1")        
        elem.classList.add("jó");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz2")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz3")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
    }
    if (kérdések[kerdID].correctAnswer == 2) {
        var elem = document.getElementById("válasz1")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz2")
        elem.classList.add("jó");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz3")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
    }
    if (kérdések[kerdID].correctAnswer == 3) {
        var elem = document.getElementById("válasz1")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz2")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz3")
        elem.classList.add("jó");
        elem.classList.remove("kattintható");
    }
    
}