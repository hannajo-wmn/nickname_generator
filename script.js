let nameComponent01 = ["blue", "melodic", "flying", "green", "sunny", "dancing", "wild", "fresh", "rose", "frozen", "orange", "nova", "ancient", "autumn", "glowing", "crystal", "fluid", "sparkling", "fluffy", "unseen"];
let nameComponent02 = ["leaf", "peppermint", "coffee", "spring", "summer", "lemonade", "bubble", "ice", "tea", "sound", "strawberry", "mango", "tiger", "ukulele", "umbrella", "snowflake", "muffin", "noise", "paper"];
let nameComponent03 = ["square", "pyjama", "rocket", "planet","universe", "balloon", "cookie", "bulb", "ship", "cloud", "code", "music", "elephant", "socks", "heaven", "dream", "tale", "myth", "desert", "pond", "forest", "ocean"];

let x,y,z // globale Variablen, in die später die Zufallszahlen reingeschrieben werden

let short_or_long // globale Variable in der gespeichert wird, ob zuletzt auf "short username" oder "long username" geklickt wurde


// die folgende Funktion erzeugt Zufallszahlen in einem durch min und max definierten Bereich
function createRandomIndices() {
    let min = 0; // entspricht erster Stelle im Array
    let max = 18; //diese Zahl sollte der letzten Stelle im kürzesten nameComponent Array entsprechen.
    x = Math.floor(Math.random() * (max - min)) + min;
    y = Math.floor(Math.random() * (max - min)) + min;
    z = Math.floor(Math.random() * (max - min)) + min;
}

//  manipuliert einen kurzen Namen entsprechend der drei möglichen Optionen
function createShortName() {
    let nickname = document.getElementById("name"); // holt das P-Element aus dem HTML, in dem der Name erscheinen soll
    let option = document.getElementById("options").value // holt die gewählte Option des Select-Objects

    if (option == "small") {
        nickname.innerText = nameComponent01[x] + nameComponent02[y]; // die Zufallselemente aus den Namens-Arrays werden lediglich hintereinander gehängt
    }
    else if (option == "camel") {
        let part1 = nameComponent01[x]; // es wird eine Variable erzeugt, in der der zufällig ausgewählte, erste Namens-String gespeichert wird
        let part2 = nameComponent02[y]; // es wird eine Variable erzeugt, in der der zufällig ausgewählte, zweite Namens-String gespeichert wird
        // der erste Buchstabe wird zum Großbuchstaben, der Rest wird unverändert angehängt. Bei der zweiten Komponente ebenfalls.
        nickname.innerText = part1[0].toUpperCase() + part1.substring(1, part1.length) + part2[0].toUpperCase() + part2.substring(1, part2.length)
    }
    else if (option == "underscore"){
        let parta = nameComponent01[x];
        let partb = nameComponent02[y];
        nickname.innerText = parta + "_" + partb; //hinzufügen eines sehr kurzen Strings reicht hier
    }
}

// generiert einen kurzen Namen und aktualisiert die Variable short_or_long
function clickCreateShort() {
    createRandomIndices();
    createShortName();
    short_or_long = "short";
}

// manipuliert einen langen Namen entsprechend der drei möglichen Optionen
function createLongName() {
    let nickname = document.getElementById("name");
    let option = document.getElementById("options").value

    if (option == "small") {
        nickname.innerText = nameComponent01[x] + nameComponent02[y] + nameComponent03[z];
    }
    else if (option == "camel") {
        let part1 = nameComponent01[x];
        let part2 = nameComponent02[y];
        let part3 = nameComponent03[z];
        nickname.innerText = part1[0].toUpperCase() + part1.substring(1, part1.length) + part2[0].toUpperCase() + part2.substring(1, part2.length) + part3[0].toUpperCase() + part3.substring(1, part3.length)
    }
    else if (option == "underscore"){
        let parta = nameComponent01[x];
        let partb = nameComponent02[y];
        let partc = nameComponent03[z];
        nickname.innerText = parta + "_" + partb + "_" + partc;
    }
}

// generiert einen langen Namen und aktualisiert die Variable short_or_long
function clickCreateLong() {
    createRandomIndices();
    createLongName();
    short_or_long = "long";
}

function decideShortOrLong() {
    if (short_or_long == "short") {
        createShortName();
    }
    else if (short_or_long == "long"){
        createLongName();
    }
}

document.getElementById("create1").addEventListener("click", clickCreateShort);
document.getElementById("create2").addEventListener("click", clickCreateLong);
document.getElementById("options").addEventListener("change", decideShortOrLong);




