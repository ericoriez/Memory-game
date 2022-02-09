// * *********** * //
// * DECLARATION
// * *********** * //

const button = document.querySelector("button");
const deck = document.getElementById("deck");
let timerElement = document.getElementById("times");
let temps = 300;
let tabFruits = [];
let tab2 = [];
let verifWin = 0;

// ? ???????? ? //
// ? FUNCTION
// ? ???????? ? //

//  tourner les cartes
function switchCards() {
    const turn = document.querySelectorAll(".cards");
    turn.forEach((carte) => {
        carte.addEventListener("click", (event) => {
            carte.classList.toggle("backCards");
            tab2.push(carte);
            if (tab2.length == 2) {
                if (tab2[0].dataset.id === carte.dataset.id) {
                    carte.style.pointerEvents = "none";
                    tab2 = [];
                    verifWin++;
                    // reset();
                    if (verifWin === 18) {
                        alert("bravo");
                    }
                } else {
                    setTimeout(() => {
                        tab2[0].classList.add("backCards");
                        carte.classList.add("backCards");
                        tab2 = [];
                    }, 500);
                }
            }
        });
    });
}
// melanger les cartes
function aleatoir(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}

//  creer les cartes
function createCards() {
    for (let i = 1; i < 19; i++) {
        carte = document.createElement("div");
        carte.style.background = `center/cover no-repeat url(img/fruits/${i})`;
        carte.classList.add("cards");
        carte.classList.add("backCards");
        carte.dataset.id = `${i}`;
        tabFruits.push(carte);
        aleatoir(tabFruits);
    }
}

// creer le tableau de 36 cartes
function createChilds() {
    for (let u = 0; u < 36; u++) {
        deck.appendChild(tabFruits[u]);
    }
}
function reset() {
    if (verifWin == 1) {
        deck.remove();
    }
}
// creer le timer
function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    timerElement.innerText = `times ${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
}

// TODO *********
// TODO EXECUTION
// TODO *********

button.addEventListener("click", (event) => {
    document.getElementById("page-entrer").style.display = "none";

    createCards();
    createCards();
    createChilds();
    switchCards();
    setInterval(diminuerTemps, 1000);
    reset();
});
