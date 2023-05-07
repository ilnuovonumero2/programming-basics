const randomNumber = Math.floor(Math.random() * 38);
const redArray = ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"];
const blackArray = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"];
let found = false;

if (!found) {
    if (randomNumber === 0) {
        console.log("Zéro");
    } else if (randomNumber === 37)
        {
        console.log("Double Zéro");
    } else {
        console.log(`Le numéro gagnant est ${randomNumber}`);
    }
}


for (let i = 0; i < redArray.length; i++) {
    if (parseInt(redArray[i]) === randomNumber) {
        console.log("Rouge");
        found = true;
        break;
    }
}

if (!found) {
    for (let i = 0; i < blackArray.length; i++) {
        if (parseInt(blackArray[i]) === randomNumber) {
            console.log("Noir");
            found = true;
            break;
        }
    }
}


if (randomNumber !== 0 && randomNumber !== 37) {
    if (randomNumber % 2 === 0) {
        console.log("Pair et " + randomNumber);
    } else {
        console.log("Impair et " + randomNumber);
    }
}

if (randomNumber >= 1 && randomNumber <= 18) {
    console.log("Manque") 
}
if (randomNumber >= 19 && randomNumber <= 36) {
    console.log("Passe")
}
console.log(`Faites vos jeux...
Rien ne va plus!`)