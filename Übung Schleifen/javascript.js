for (let i = 0; i<=10; i++){
    console.log("Wiederholung " + i);
}

let counter = 0;
while (counter < 10){
    console.log("While Loop, Wiederholung " + counter);
    counter++;
}

let anlagebetrag = 5000;
let zins = 0.04;
let laufzeit = 10;
let gesamtkapital = anlagebetrag;

let jahr = 1;

while (jahr <= laufzeit){
    gesamtkapital = gesamtkapital * (1+zins);

    console.log("Bei einer Verzinsung von " 
    + zins*100 + "% erhalten wir nach " + jahr 
    + " Jahren ein Gesamtkapital von:" + 
    gesamtkapital.toFixed(2));

    jahr++;
}