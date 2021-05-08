var kérdések;
var kerdID = 1;

var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában

var timeoutHandler;

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
        .then(
            //kérdésMegjelenítés;
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
            }
        );
}  

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
    timeoutHandler = setTimeout(előre, 3000);
}


function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;

    kérdésMegjelenítés(kerdID)
}

function kérdésMegjelenítés(kérdés) {
    kérdés = hotList[displayedQuestion].question;
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

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

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
    clearTimeout(timeoutHandler)
    kerdID++;
    //if (kerdID == kérdések.length+1) {
    //    kerdID = 0;
    //}
    //kérdésBetöltés(kerdID)
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
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