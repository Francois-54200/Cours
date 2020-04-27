// Les Variables
/*

var a = 1 // nombres
var b = "chaine" // Pas de différence entre " et ' 
var c = ['tab', 2, 3.14] // Les tableaux fonctionnent comme en PHP

// Les objets "remplacent" les tableaux associatifs
var d = {
    nom: 'Marc',
    note: 18
    notes: [2, 10, 16]    
}
d.nom // Marc 
d['nom'] // Marc
var e = null // valeur nulle
var f = false // booléen
var g = undefined // Pas d'équivalent en PHP
var h // Prendra automatiquement la valeur undefined


//La Concaténation

"Salut" + " les gens" // "Salut les gens"

// Attention par contre à la conversion implicite
"1" + 1 // 11
"43" > 7 // false (la comparaison est fait par ordre alphabétique car 7 est considéré comme une chaine)
43 > 7 // true 
"1" * 3 // 3 (pas possible de multiplier une chaine, "1" est implicitement convertit en nombre)



//Les Conditions


if (<condition>) {

} else if (<condition>) { // Le else if s'écrit en 2 mots

} else {

}
</condition>
</condition>



//Les Boucles
//Les boucles s'écrivent de la même façon qu'en PHP avec le while ou le for

while (<condition>) {

}

for (var i = 0; i < 10; i++) {

}</condition>
*/

/*
//Les Fonctions

function demo (a) {
    return a * 3   
}
//OU
var demo2 = function (a) {
    return a * 3   
}

demo(3) // 9


// 1. La fonction peut utiliser des variables hors de la portée locale
var b = "1"
function demo (a) {
    return b    
}
demo() // "1"
b = 3
demo() // 3

// 2. On peut appeller une fonction sans paramètre
function demo (a) {
    return a    
}
demo() // undefined

// 3. Si on veut donner une valeur par défaut au paramètre
function demo (a) {
    if (a === undefined) {
        a = 0
    }
}*/

/*
"Salut" // C'est une instance de l'objet String
"Salut".toUpperCase() // "SALUT"
1.123124.toFixed(2) // "1.12"

// L'objet de base à lui aussi des méthodes
String.fromCharCode(65) // "A"
"aze".length // 3
["Salut", "les", "gens"].length // 3
"1,2,3".split(',') // ['1', '2', '3']

// Un remplaçant pour notre fameux foreach ^^
["Salut", "les", "gens"].forEach(function (eleve) {
    "Salut " + eleve 
})*/