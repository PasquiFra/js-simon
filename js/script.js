console.log ("JS OK");

// Dichiaro le variabili dal DOM

const button = document.getElementById("create-nums");
const timer = document.getElementById("timer");
const generatedNums = document.getElementById("magic-numbers");
const myNum1 = document.getElementById("my-number-1");
const myNum2 = document.getElementById("my-number-2");
const myNum3 = document.getElementById("my-number-3");
const myNum4 = document.getElementById("my-number-4");
const myNum5 = document.getElementById("my-number-5");

// dichiaro la variabile con il numero di celle (e numeri) da generare
let totCells = 5;
const minNum = 1;
const maxNum = 99;
const blacklistNums = [];
let randomNumber ;


//! START GAME function

const startGame = () => {
    console.log("partito!");
    
    // creo le celle ed inserisco il numero causale 
    for (let i = 0; i < totCells; i++) {
        
        getUniqueRandomNumber(minNum, maxNum, blacklistNums)

        generateCell(randomNumber)



        blacklistNums.push(randomNumber)
        
        console.log(blacklistNums);
        console.log(randomNumber);
        console.log(i)

    }
}


button.addEventListener("click", startGame)