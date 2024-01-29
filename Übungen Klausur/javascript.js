function arrayUmkehren (liste) {
    let umgekehrtesArray = [];
    for (let index = liste.length-1; index >= 0; index--){
        umgekehrtesArray.push(liste[index]);
    }
    return umgekehrtesArray;
}

function mergeArrays (liste1, liste2){
    let mergedArray = [];
    for (let index = 0; index < liste1.length; index++){
        if (liste1[index] % 2 === 1){
            mergedArray.push(liste1[index]);
        }
    }
    for (let index = 0; index < liste2.length; index++){
        if (liste2[index] % 2 === 1){
            mergedArray.push(liste2[index]);
        }
    }
    return mergedArray;
}

function verdoppelArrayValue (liste){
    let doppeltesArray = [];
    for (let index = 0; index < liste.length; index++){
        doppeltesArray.push(liste[index]*2)
    }
    return doppeltesArray;
}

function searchNumber (liste, zielzahl) {
    let count = 0;
    for (let index = 0; index < liste.length; index++){
        if (liste[index]===zielzahl){
            count++;
        }
    }
    return count;
}

function berechneDurchschnitt (liste){
    let summe = 0;
    for (let index = 0; index < liste.length; index++){
        summe += liste[index];
    }
    let mittelwert = summe/liste.length;
    return mittelwert;
}

function getBiggestNumber (liste){
    let biggestNumber = liste[0];
    for (let index = 1; index < liste.length; index++){
        if (liste[index] > biggestNumber){
            biggestNumber = liste[index];
        }
        else {
            continue;
        }
    }
    return biggestNumber;
}

function getSumme (liste){
    let summe = 0;
    for (let index = 0; index < liste.length; index++){
        summe += liste[index];
    }
    return summe;
}

let testArray1 = [1, 2, 3, 4 , 5, 6, 3, 4];
let testArray2 = [ 7, 8 ,9, 10, 11, 12]


console.log(arrayUmkehren(testArray1));
console.log(mergeArrays(testArray1, testArray2));
console.log(verdoppelArrayValue(testArray1));
console.log(searchNumber(testArray1, 4));
console.log(berechneDurchschnitt(testArray1));
console.log(getBiggestNumber(testArray1))
console.log(getSumme(testArray1))