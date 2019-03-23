let textbox = document.getElementById("TextBox");
textbox.addEventListener('click', function() {
    textbox.select();
    document.execCommand('copy');
    return false;
});

let phonetic_zone = document.getElementById("PhoneticZone");
phonetic_zone.addEventListener('click', function() {
    phonetic_zone.select();
    document.execCommand('copy');
    return false;
});


let select = document.getElementById("select");
let valeurs;
select.addEventListener('click', function() {
    valeurs = select.options[select.selectedIndex].value;
    let voix = valeurs;
    console.log("La voix choisie est : " + voix);
});



let consonnes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
let voyelles = ["a", "e", "i", "o", "u"];




let press_play = document.getElementById("Play");

press_play.addEventListener('click', phoneticON);

function phoneticON() {
    phonetic_zone.innerHTML = " ";
    let text_lowercase = textbox.value.toLowerCase();
    let text_array = Array.from(text_lowercase);
    let phonetic_array = [];
    console.log("avant phonétiquation= " + text_array);


    for (let i = 0; i < text_array.length; i++) {


        //Sons composés
        if (
            text_array[i] === "i" && text_array[i + 1] === "n" ||
            text_array[i] === "i" && text_array[i + 1] === "e" && text_array[i + 2] === "n" ||
            text_array[i] === "i" && text_array[i + 1] === "m" && text_array[i + 2] === "b" ||

            text_array[i] === "y" && text_array[i + 1] === "m" ||
            text_array[i] === "y" && text_array[i + 1] === "e" && text_array[i + 2] === "n" ||

            text_array[i] === "e" && text_array[i + 1] === "i" && text_array[i + 2] === "n" ||
            text_array[i] === "e" && text_array[i + 1] === "i" && text_array[i + 2] === "m" ||

            text_array[i] === "u" && text_array[i + 1] === "n" ||
            text_array[i] === "u" && text_array[i + 1] === "m"
        ) {
            phonetic_zone.innerHTML += " hin ";
            phonetic_array.push("hin");
        }


        if (
            text_array[i] === "e" && text_array[i + 1] === "m" ||
            text_array[i] === "e" && text_array[i + 1] === "n" ||

            text_array[i] === "a" && text_array[i + 1] === "n" ||
            text_array[i] === "a" && text_array[i + 1] === "o" && text_array[i + 2] === "n" ||
            text_array[i] === "a" && text_array[i + 1] === "m"
        ) {
            phonetic_zone.innerHTML += " han ";
            phonetic_array.push("han");

        }


        if (
            text_array[i] === "o" && text_array[i + 1] === "m" && text_array[i + 2] === "b" ||
            text_array[i] === "o" && text_array[i + 1] === "n"

        ) {

            phonetic_zone.innerHTML += "on";
            phonetic_array.push("on");

        }



        //Consonnes
        if (
            text_array[i] === "z" ||
            text_array[i - 3] === "l" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "a" ||
            text_array[i - 3] === "l" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "e" ||
            text_array[i - 3] === "l" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "i" ||
            text_array[i - 3] === "l" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "o" ||
            text_array[i - 3] === "d" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "a" ||
            text_array[i - 3] === "d" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "e" ||
            text_array[i - 3] === "d" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "i" ||
            text_array[i - 3] === "d" && text_array[i - 2] === "e" && text_array[i - 1] === "s" && text_array[i] === "_" && text_array[i + 1] === "o"
        ) {
            phonetic_zone.innerHTML += " z'";
            phonetic_array.push("z");

        }


        if (
            text_array[i] === "g" && text_array[i + 1] === "u" && text_array[i + 1] === "r" ||
            text_array[i] === "g" && text_array[i + 1] != "e" && text_array[i + 1] != "i") {
            phonetic_zone.innerHTML += "g";
            phonetic_array.push("g");

        }


        if (
            text_array[i] === "p" && text_array[i + 1] === "h" ||
            text_array[i] === "f") {

            phonetic_zone.innerHTML += "f";
            phonetic_array.push("f");

        }


        if (
            text_array[i] === "p" && text_array[i + 1] != "h") {

            phonetic_zone.innerHTML += "p";
            phonetic_array.push("p");

        }


        if (
            text_array[i] === "r" && text_array[i - 1] != "e") {

            phonetic_zone.innerHTML += "r";
            phonetic_array.push("r");

        }


        if (
            text_array[i] === "t" &&
            text_array[i + 1] === "o" ||
            text_array[i] === "t" && text_array[i + 1] === "u" ||
            text_array[i] === "t" && text_array[i + 1] === "i" ||
            text_array[i] === "t" && text_array[i + 1] === "a" ||
            text_array[i] === "t" && text_array[i + 1] === "e" ||
            text_array[i] === "t" && text_array[i + 1] === "è" ||
            text_array[i] === "t" && text_array[i + 1] === "é") {

            phonetic_zone.innerHTML += "t";
            phonetic_array.push("t");

        }


        if (
            text_array[i] === "k" ||
            text_array[i] === "c" && text_array[i + 1] === "u" ||
            text_array[i] === "c" && text_array[i + 1] === "o" ||
            text_array[i] === "c" && text_array[i + 1] === "a" ||

            text_array[i] === "q" && text_array[i + 1] === "o" ||
            text_array[i] === "q" && text_array[i + 1] === "u" ||
            text_array[i] === "q" && text_array[i + 1] === "i"

        ) {
            phonetic_zone.innerHTML += "k";
            phonetic_array.push("k");

        }


        if (
            text_array[i] === "k" ||
            text_array[i] === "c" && text_array[i + 1] === "e" ||
            text_array[i] === "c" && text_array[i + 1] === "i" ||
            text_array[i] === "s" && text_array[i + 1] === "s" ||
            text_array[i] === "s" && text_array[i + 1] === "a"
        ) {

            phonetic_zone.innerHTML += "s";
            phonetic_array.push("s");

        }


        if (
            text_array[i] === "b"
        ) {

            phonetic_zone.innerHTML += "b";
            phonetic_array.push("b");

        }
        if (
            text_array[i] === "d"
        ) {

            phonetic_zone.innerHTML += "d";
            phonetic_array.push("d");

        }

        if (
            text_array[i] === "m" ||
            text_array[i - 1] === "o" && text_array[i] === "m" && text_array[i + 1] != "p"

        ) {

            phonetic_zone.innerHTML += "m";
            phonetic_array.push("m");

        }

        //Les voyelles
        if (
            text_array[i] === "e" && text_array[i + 1] === "a" && text_array[i + 2] === "u" ||
            text_array[i] === "a" && text_array[i + 1] === "u" ||
            text_array[i] === "o" && text_array[i + 1] === " " ||
            text_array[i] === "o" && text_array[i + 1] != "u" ||
            text_array[i] === "o" && text_array[i + 1] != "o" ||
            text_array[i] === "o" && text_array[i + 1] != "a" ||
            text_array[i] === "o" && text_array[i + 1] != "i" ||
            text_array[i] === "o" && text_array[i + 1] != "m" && text_array[i + 2] != "p" ||
            text_array[i] === "o" && text_array[i + 1] != "m" && text_array[i + 2] != "b"
        ) {
            phonetic_zone.innerHTML += "O";
            phonetic_array.push("O");

        }


        if (
            text_array[i] === "e" &&
            text_array[i + 1] != "l") {

            phonetic_zone.innerHTML += "euh";
            phonetic_array.push("euh");

        }


        if (
            text_array[i] === "a" &&
            text_array[i + 1] != "i" &&
            text_array[i + 1] != "n" &&
            text_array[i + 1] != "m" &&
            text_array[i + 1] != "u") {

            phonetic_zone.innerHTML += "a";
            phonetic_array.push("a");

        }


        if (
            text_array[i] === "i" && text_array[i + 1] != "n" && text_array[i + 1] != "m" ||
            text_array[i] === "y") {
            phonetic_zone.innerHTML += "i";
            phonetic_array.push("i");

        }

        if (
            text_array[i] === "o" && text_array[i + 1] === "u" ||
            text_array[i] === "o" && text_array[i + 1] === "o" ||
            text_array[i] === "w"
        ) {
            phonetic_zone.innerHTML += "ou";
            phonetic_array.push("ou");

        }

        if (
            text_array[i] === "l") {
            phonetic_zone.innerHTML += "l";
            phonetic_array.push("l");

        }

        if (
            text_array[i] === "é" ||
            text_array[i - 1] === "e" && text_array[i] === "z" && text_array[i + 1] === " " ||
            text_array[i - 1] === "e" && text_array[i] === "r" && text_array[i + 1] === " "
        ) {
            phonetic_zone.innerHTML += "é";
            phonetic_array.push("é");

        }


        if (
            text_array[i] === "ï" ||
            text_array[i - 1] === "a" && text_array[i] === "y" && text_array[i + 1] === "e" ||
            text_array[i - 1] === "a" && text_array[i] === "i" && text_array[i + 1] === "l"

        ) {
            phonetic_zone.innerHTML += "ï";
            phonetic_array.push("ï");

        }
        if (
            text_array[i] === "c" && text_array[i + 1] === "h" ||
            text_array[i] === "s" && text_array[i + 1] === "h"

        ) {
            phonetic_zone.innerHTML += "ch";
            phonetic_array.push("ch");

        }


        // Espace
        if (
            text_array[i] === " "
        ) {

            phonetic_zone.innerHTML += " ";
            phonetic_array.push(" ");

        }
    }
    console.log("Le tableau phonétique corresspond à: " + phonetic_array);
}


let result = document.getElementById("result");