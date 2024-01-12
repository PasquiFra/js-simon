//! dichiaro le funzioni

/**                 
 * Restituisce un numero, compreso tra un minimo e un massimo, ma non facente parte di una lista di numeri vietati
 * @param {number} min il numero minimo
 * @param {number} max il numero massimo
 * @param {array} blacklist i numeri che non possono essere restituiti
 * @returns {number} un solo numero compreso tra min e max ma non presente nella lista dei vietati
 */

const getUniqueRandomNumber = (min, max, blacklist) => {

    //continua a pescare numeri fintanto che quello che hai pescato è già nella blacklist
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    } while (blacklist.includes(randomNumber));
    return randomNumber
}

/**                 
 * Genera una cella
 * @param {number} string il contenuto che voglio inserire nella cella 
 * @returns {*} una cella con eventualmente del contenuto al suo interno
 */

const generateCell = (content) => {
    const cell = document.createElement("div");
    cell.className = "num-cell m-3 flex-center";
    cell.innerText = content;
    return cell;
}