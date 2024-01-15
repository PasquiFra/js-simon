console.log ("JS OK");

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
    console.log("partito!");
    
    button.classList.add("disabled")
    displayNums.innerHTML = "";

    message.innerText = "Ho generato questi numeri, hai 30 secondi per memorizzarli!"

    // creo le celle ed inserisco il numero causale 
    for (let i = 0; i < totCells; i++) {
        
        randomNumber = getUniqueRandomNumber(minNum, maxNum, generatedNums, totCells);

        generatedNums.push(randomNumber);
        
        cell = generateCell(generatedNums[i]);
        displayNums.appendChild(cell);

        myInput = generateMyCell();
        myNums.innerHTML += myInput;
    }
    
    const checkInputs = document.querySelectorAll(".my-inputs");
    console.log(checkInputs)
    
    leftTime = setInterval(() => {
        timerCount = timerFunction(timerCount);
        timer.textContent = timerCount;
    }, 1000)
    
    const confirm = () => {
        
        console.log("entrato!")
        
        validationMessage.innerText = "";
        //validationMessage.classList.remove("text-success");
        //validationMessage.classList.remove("text-danger");
        
        const userGuesses = [];
        const correctAnswers = [];
        
        for (let i=0; i < totCells ; i++) {
            
            const field = checkInputs[i];
            const value = parseInt(field.value)
            console.log(value)
            
            if (!isNaN(value) && value >= minNum && value <= maxNum && !userGuesses.includes(value)) {
                userGuesses.push(value);
            }
            
        }
        
        if (userGuesses.length !== totCells ) {
            validationMessage.classList.add("text-danger");
            validationMessage.innerText = "Ci sono valori non validi o duplicati"
        }

        
        for (let guess of userGuesses) {
            if(generatedNums.includes(guess)) correctAnswers.push(guess);
        }
        
        if (correctAnswers.length === totCells) {
            validationMessage.classList.add("text-success")
        } 
        validationMessage.innerText = `Hai indovinato ${correctAnswers.length} numeri! (${correctAnswers})`
        console.log(userGuesses, correctAnswers)
    }
    submitButton.addEventListener("click", confirm);
}



button.addEventListener("click", startGame);
