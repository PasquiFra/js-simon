console.log("JS OK");

// Dichiaro le variabili dal DOM

const button = document.getElementById("create-nums");
const timer = document.getElementById("timer");
const displayNums = document.getElementById("magic-numbers");
const myNums = document.getElementById("my-numbers");
const message = document.getElementById("message");
const submitButton = document.getElementById("submit-button");
const validationMessage = document.getElementById("validation-message");

// dichiaro la variabile con il numero di celle (e numeri) da generare
let totCells = 5;
const minNum = 1;
const maxNum = 99;
const generatedNums = [];
let randomNumber;
let cell;
let myInput;
let timerCount = 3;
let leftTime;

timer.textContent = timerCount

//! START GAME function

const startGame = () => {


    button.classList.add("disabled")
    displayNums.innerHTML = "";

    message.innerText = `Ho generato questi numeri, hai ${timerCount} secondi per memorizzarli!`

    // creo le celle ed inserisco il numero casuale che ho generato
    for (let i = 0; i < totCells; i++) {

        randomNumber = getUniqueRandomNumber(minNum, maxNum, generatedNums, totCells);

        generatedNums.push(randomNumber);

        cell = generateCell(generatedNums[i]);
        displayNums.appendChild(cell);

        myInput = generateMyCell();
        myNums.innerHTML += myInput;
    }

    // richiamo la funzione timer ogni secondo e stampo il tempo rimanente in pagina
    leftTime = setInterval(() => {
        timerCount = timerFunction(timerCount);
        timer.textContent = timerCount;
    }, 1000)

    //vado a prendere l'elemento del dom che controlla i numeri inseriti dal giocatore
    const checkInputs = document.querySelectorAll(".my-inputs");

    // valido le risposte del giocatore e restituisco un riscontro
    const confirm = () => {

        validationMessage.innerText = "";
        validationMessage.classList.remove("text-success");
        validationMessage.classList.remove("text-danger");

        const userGuesses = [];
        const correctAnswers = [];

        for (let i = 0; i < totCells; i++) {

            const field = checkInputs[i];
            const value = parseInt(field.value);

            if (!isNaN(value) && value >= minNum && value <= maxNum && !userGuesses.includes(value)) {
                userGuesses.push(value);
            }
            console.log(userGuesses)

        }

        if (userGuesses.length !== totCells) {
            validationMessage.classList.remove("text-success")
            validationMessage.classList.add("text-danger");
            validationMessage.innerText = "Ci sono dei campi vuoti, non validi o duplicati! Inserisci dei numeri"
            return
        }


        for (let guess of userGuesses) {
            if (generatedNums.includes(guess)) correctAnswers.push(guess);
        }

        if (correctAnswers.length) {
            validationMessage.classList.remove("text-danger")
            validationMessage.classList.add("text-success")
            if (correctAnswers.length === 1) {
                validationMessage.innerText = `Hai indovinato ${correctAnswers.length} solo numero... puoi fare meglio!`
            } else {
                validationMessage.innerText = `Hai indovinato ${correctAnswers.length} numeri! ${correctAnswers}`
            }
        }
        else {
            validationMessage.classList.remove("text-success")
            validationMessage.classList.add("text-danger")
            validationMessage.innerText = `Non hai ricordato alcun numero... allena ancora la tua memoria!`
        }
    }
    submitButton.addEventListener("click", confirm);
}



button.addEventListener("click", startGame);
