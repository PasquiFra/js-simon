
const getUniqueRandomNumber = (min, max, listOfGenNumbers) => {
    let randomNumber;
    //continua a pescare numeri fintanto che quello che hai pescato è già nella blacklist
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    } while (listOfGenNumbers.includes(randomNumber));
    return randomNumber
}

const generateCell = (content) => {
    const cell = document.createElement("div");
    cell.className = "magic-numbers num-cell m-3 flex-center";
    cell.innerText = content;
    return cell;
}
const generateMyCell = () => {
    const code = 
    `
    <input type="number" class="my-inputs form-control num-cell m-3 flex-center" min="1" max="99" required>
    `;
    cell = code;
    return cell;
}

const timerFunction = (count) => {
   
    let remainingTime = count;
    const addBlur = document.querySelectorAll(".magic-numbers");

    if (count === 0){
        clearInterval(count);
        for (let i = 0 ; i < totCells ; i++){
            addBlur[i].classList.add("blur");
        }
        message.innerHTML = "Inserisci i numeri che hai memorizzato... <br> Vediamo se hai una buona memoria!"
        myNums.classList.remove("d-none");
        submitButton.classList.remove("d-none");

    } else {
        --remainingTime;
        console.log(remainingTime)
    }
    return remainingTime
}
