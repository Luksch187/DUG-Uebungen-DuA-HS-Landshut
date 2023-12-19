//Loggen Sie den Inhalt "Hello World!" in der JavaScript Konsole
console.log('Hello World!');

//Selektieren Sie im JavaScript das Element mit dem id-Attribut „headline“ (document.getElementById)
//Ersetzen Sie den Inhalt der Überschrift durch Ihr Namenskürzel
document.getElementById('headline').textContent="Mein Namenskürzel";

// Erstellen Sie	eine Variable und weisen Sie das selektierte HTML Element zu
let headline = document.getElementById('headline');

// Erstellen Sie	eine weitere Variable und weisen Sie Ihr Namenskürzel zu
let kuerzel = "Mein Namenskuerzel";

/* Passen	Sie	den	Code	so	an,	dass	die	Ausgabe	im	Browser	unverändert	bleibt,	
diesmal	jedoch	die	gerade	erstellen Variablen	verwendet	werden */
headline.textContent = kuerzel;

/* Weisen	Sie	der	Variable	aus	C.	einen	neuen	Wert	zu	und	erweitern	das	
Programm,	so dass der	neue	Wert	als	Überschrift	auf	der	Webseite	angezeigt	
wird */

kuerzel = "Meine neue Überschrift";
headline.textContent = kuerzel;








/* Erstellen	Sie	ein	JavaScript-Programm,	dass	die	Zahl	42	in	einer	Konstanten	und	
die	Zeichenkette	„420“ jeweils	in	einer	Variablen	speichert und	geben	Sie	beide	
Werte	in	der	Konsole	aus. */

const zahl = 42;
let zeichenkette = "420";

console.log(zahl);
console.log(zeichenkette);

/* Weisen	Sie	der	Variablen	aus	A.	einen	neuen	Wert	„Ich	bin	eine	Zahl“ zu	und	
geben	Sie	das	Ergebnis	auf	der	Konsole	aus */

zeichenkette = "Ich bin eine Zahl";

console.log(zeichenkette);

/* Erstellen	Sie	eine	weitere	Konstante,	welche im	Ergebnis	die Zahl	24 ausgeben	
soll.	Verwenden	Sie	für	die	Berechnung	die	Konstante	aus	A.	mit	der	Zahl	42	und	
geben	Sie	das	Ergebnis	auf	der	Konsole	aus. */

const ergebnis = zahl - 18;

console.log(ergebnis)

// Ergebnislog:
// 42
// „420“
// „Ich	bin	eine Zahl“
// 24