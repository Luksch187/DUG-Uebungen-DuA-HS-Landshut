/*

  Dieses Übungsblatt vereint die wichtigsten bisherig bearbeiteten JavaScript / HTML & CSS Aufgaben

  Der JavaScript (JS) Code ist in unterschiedliche Teilaufgaben, jedoch in der selben Datei unterteilt.

*/
// 1.0
// 1.1 Speichern einer Zahl, die in diesem Scenario dem Umsatz entsprechen soll, in einer Konstanten
// Reminder: Um Werte speicher zu können, entweder einen unveränderlichen Wert mit "const" oder einen
// veränderlichen Wert mit "let" + Variablennamen anlegen. Im Falle von "const" muss der Inhalt gleich zugewiesen werden.

const umsatz = 1000;

console.log(umsatz)

// 1.3 Wir wollen neben der Zahl auch einen Text in einer Variable abspeichern:
// Speichert die Zeichenkette "Firmenname" in einer Variablen. Dieser soll später noch individualisiert werden.

let firmen_name = "Firmenname";

// 1.4 Hier soll die Zeichenkette zu Kontrollzwecken ebenfalls in der Konsole ausgegeben werden:

console.log(firmen_name);

// 1.5 Wir möchten den Inhalt der Zeichenkette zu einem konkreten Unternehmensnamen abändern:

firmen_name = "Bayerische Vertriebsagentur für Katzenfutter AG (BVK)";

console.log(firmen_name);

// 2.0 
// 2.1 Über einfache Kontrollstrukturen können wir kontrollieren, welche Konsolen-Ausgaben getätitgt werden sollen.
// Hierzu fügen wir um jede entsprechende Konsolenausgabe eine kleine Kontrollstruktur hinzu:
// 2.2 Um den Modus steuern zu können, legen wir eine neue, veränderbare Variable mit dem namen "testmodus" an.
// Wenn weitere Log-Informationen ausgegeben werden sollen, Testmodus aktivieren (durch setzen auf 1):

let testmodus = 0;

// 2.3 Wir überprüfen in der Konsole, ob unser Testmodus aktiv ist.

if (testmodus === 1){
    console.log("Testmodus ist aktiviert");
}

if (testmodus === 0) {
    console.log("Testmodus ist deaktiviert");
}

// 3.0
// In diesem Beispiel haben wir zwei Varianten der Anlage von Variablen im Vergleich.
// 3.1 Zuerst die sehr ausführliche Variate mit Zwischenvariable und vielen Zwischenschritten:

let berechneteZahl;

berechneteZahl = umsatz;

// Ermittlung Provisionssatz in Höhe von 24%

berechneteZahl = berechneteZahl * 0.24;

console.log("Umständlich berechnet: " + berechneteZahl);

// 3.2 Alternativ die zusammengefasste Variante in einer Zeile:

console.log("Kompakt berechnet: " + umsatz * 0,24);

// 3.3 Mit der berechneten Zahl können im weiteren Verlauf natürlich noch weitere Berechnungen vorgenommen werden
// Beispielswese weitere mathematische Operationen:

console.log("10-faches der berechneten Zahl: " + 10 * berechneteZahl);

// 3.4 Damit das Ergebnis auch in unserer Webseite (HTML) angezeigt wird, weisen wir den Inhalt einem HTML-Element zu:

document.getElementById("headline").textContent="Die Provision des Umsatzes ist: " + berechneteZahl;

// 3.5 Die weitere Durchführung soll im Testmodus verlaufen:

testmodus = 1;

// 3.6 Überprüfen, ob es sich um einen Spitzerverkäufer handelt: (ab 1 Mio Umsatz)

if(berechneteZahl >= 1000000){
    if(testmodus == 1){
        console.log("Provision mindestens 1.000.000: " + berechneteZahl);
    }
    // Unabhängig von der zweiten Kontrollabfrage soll dieser Text ausgegeben werden.
    console.log("Spitzenverkäufer, Gratulation! lächelnd"); 
}
else{
    if(testmodus == 1){
        console.log("Provision unter 1.000.000: " + berechneteZahl);
    }
    // Unabhängig von der zweiten Kontrollabfrage soll dieser Text ausgegeben werden.
    console.log("Übung macht den Meister, Dranbleiben! lächelnd"); 
}

// 4.0 Übungen für Zeichzenketten-Vergleiche

let originalWort = "sauber";

// Abfrage, nach Namensgleichheit:

let vergleich = originalWort.localeCompare("sauber");

/*

Hier wird eine Funktion "localeCompare" genutzt, im Falle, dass die beiden Zeichenketten übereinstimmen, 
gibt die Funktion den Wert "0" als Ergebnis zurück, welcher in der Variable "vergleich" gespeicher wird.

*/

if (vergleich == 0 ){
    console.log("Wörter sind identisch!");
}
else{
    console.log("Wörter sind nicht identisch!");
}

// 5.0 Wir möchten zudem Zufallszahlen erzeugen:

let zufallszahl;

// 5.1 Über diese Funktion können wir Zufallszahlen bis 20 erzeugen.
zufallszahl = Math.floor(Math.random() * 20); 

// Wir möchten die Zufallszahl wieder auf der Konsole ausgeben
console.log("Zufallszahl: " + zufallszahl);

// 5.2 Wenn Zufallszahl größer-gleich 10 ist, soll  Glückwunschnachricht angzeigt werden, ansonsten die Aufforderung zum       
// erneuten ausprobieren
if (zufallszahl >= 10 ){
    console.log("Glüchwunsch, gut gewürfelt");
    document.getElementById("headline").textContent= zufallszahl + " Glüchwunsch, gut gewürfelt";
}
else{
    console.log("Nächster Versuch!");
    document.getElementById("headline").textContent=zufallszahl + " = nächster Versuch!";
}

// 6.0 [TODO] Tätigkeits-Zufallsgenerator
/* Versuchen Sie sich doch einfach an einem eigenem Zufallszahlengerator für Ihre WG oder Freundeskreis,
um unangehme Aufgaben verteilen zu können. Verlgeiche dem Streichholziehen früher.
*/

let random_number = Math.floor(Math.random()*5)

if (random_number === 0){
    console.log("Tim macht den Abwasch");
}
else if (random_number === 1){
    console.log("Jan macht den Abwasch");
}
else if (random_number === 2){
    console.log("Andi macht den Abwasch");
}
else if (random_number === 3){
    console.log("Julia macht den Abwasch");
}
else {
    console.log("Anna macht den Abwasch")
}

 // 7.0
// 7.1 Ganz zu Beginn hatten wir den Inhalt unserer Überschriften mit eigens vergebenen Namen überschrieben. 

let zwischenablage = "MD";

document.getElementById("highlight").textContent=zwischenablage;
    
//Weisen Sie der Variable aus C. einen neuen Wert zu und erweitern das
//Programm, so dass der neue Wert als Überschrift auf der Webseite angezeigt wird
    
zwischenablage = "Praktika DUG"; 

// 7.2 Hierzu kann eine Varialbe wie als "zwischenablage" (ähnlich dem Copy & paste) verwendet werden.
    
document.getElementById("highlight").textContent=zwischenablage;