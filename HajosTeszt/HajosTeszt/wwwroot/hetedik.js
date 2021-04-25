var kérdések;
var kerdID = 1;

window.onload = () => {
    letöltés()    
}

function letöltés() {
//fetch('/questions.json')
//    .then(response => response.json())
//    .then(data => letöltésBefejeződött(data)
//    );

fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésBetöltés(data)
    );
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(kérdésMegjelenítés);
}  

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}


function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;

    kérdésMegjelenítés(kerdID)
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image == "") {
        document.getElementById("kép1").style.visibility = 'hidden';
    }
    else {
        document.getElementById("kép1").style.visibility = 'visible';
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }

    kérdések = kérdés;
}

//function kérdésMegjelenítés(kérdID) {
//    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdID].questionText;

//    document.getElementById("válasz1").innerHTML = kérdések[kérdID].answer1;
//    document.getElementById("válasz2").innerHTML = kérdések[kérdID].answer2;
//    document.getElementById("válasz3").innerHTML = kérdések[kérdID].answer3;

//    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdID].image;
    
//}

function back(){
    kerdID--;
    if (kerdID == -1) {
        kerdID++;
        visszaSzinezes();
    }
    kérdésBetöltés(kerdID)
    visszaSzinezes();
}

function next() {
    kerdID++;
    //if (kerdID == kérdések.length+1) {
    //    kerdID = 0;
    //}
    kérdésBetöltés(kerdID)
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


    if (kérdések.correctAnswer == 1) {
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
    if (kérdések.correctAnswer == 2) {
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
    if (kérdések.correctAnswer == 3) {
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