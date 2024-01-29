// 1.
// 1.a  Schreiben Sie ein Programm, dass die Summe alle Zahlen aus beiden Arrays berechnet
// und geben Sie das Ergebnis auf der Konsole aus.

const array1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

const array2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];


// Funktion, die die Summe aller Elemente in einem Array berechnet


function summeArray(list){
    let summe = 0;
    
    /*
    for (let index = 0; index < list.length; index++){
        summe += list[index];
    }
    */
    let index = 0;

    while (index < list.length){
        summe += list[index];
        index++;
    }

    return summe;

}

let gesamtsumme = summeArray(array1) + summeArray(array2);

console.log(gesamtsumme);