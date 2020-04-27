/* ici on va pouvoir tester des algos en JS */
/* pour demander une valeur à l'utilisateur : var a = Lit("Mess") */
/* pour afficher une valeur à l'écran : Affiche("Mess") */


//Exemple

/*var a = Lit("Entrer une variable")
Afficher("Votre variable a est : "+a)*/



/*var age = Lit("Quel est votre age")

if ((+age)<18)  //le + fait que JS l'interprete comme un nombre
{
    Affiche("Vous etes mineur")
}
else
{
    Affiche("Vous etes majeur")
}*/

//< inf.,  > Sup.,  <= sup ou egal, >= inf ou egal, == egam, != c'est différent, ou ou .....



/*var age = Lit("Quel est votre age")

if ((+age) == 18) {
    Affiche("Vous avez 18 ans")
}
else {


    if ((+age) < 18) {
        Affiche("Vous etes mineur")
    }
    else {
        Affiche("Vous etes majeur")
    }
}*/



/*Affiche("logique booléene ET logique")
Affiche("")
Affiche("")
Affiche("faux ET faux = " + (false && false))
Affiche("faux ET vrai = " + (false && true))
Affiche("vrai ET faux = " + (true && false))
Affiche("vrai ET vrai = " + (true && true))

quand on a une condition elle doit être vrai pour rentrer dans le IF
si elle n'est pas vrai (donc fausse) on passe dans le else
du coup je vous affiche le ET logique
avec un ET logique les deux parties de la condition doivent etre à vrai pour que la condition soit à vrai et que l'on passe dans le IF
si au moins une est fausse, on passera dans le ELSE*/



/*Affiche("logique booléene OU logique")
Affiche("")
Affiche("")
Affiche("faux OU faux = " + (false || false))
Affiche("faux OU vrai = " + (false || true))
Affiche("vrai OU faux = " + (true || false))
Affiche("vrai OU vrai = " + (true || true))

avec le OU dès qu'une des condition est remplie, l'ensemble de la condition est remplie, donc on passe dans le IF
pour aller dans le ELSE tout doit être faux
Exemple:


Exemple avec un ET (&& en js)
var age = Lit("Quel est votre age")

if ((+age) >= 18 && (+age) <= 25) {
    Affiche("Vous avez droit aux réduction")
}
else {
    Affiche("Vous n'avez pas le droit aux réduction")
}

Exemple: on teste le OU
var pommes = Lit("Vous aimez les pommes ?")
var poires = Lit("Vous aimez les poires ?")

if ((+pommes) > 0 || (+poires) > 0) {
    Affiche("Vous aimez les pommes ou les poires")
}
else {
    Affiche("Vous n'aimez ni les pommes ni les poires")
}

il faut rentre 0 si on aime pas
et 1 si on aime
si tu mets 1 pour pomme
ou 1 pour poire
on dit que tu aime
si tu mets 0 aux 2 on dit que tu n'aime pas*/


/*var pommes = Lit("Vous aimez les pommes ?")
var poires = Lit("Vous aimez les poires ?")
var age = Lit("Quel est votre age")

if (((+pommes) > 0 || (+poires) > 0) && (+age) > 18) {
    Affiche("Vous aimez les pommes ou les poires")
}
else {
    Affiche("Soit vous n'aimez pas, soit on s'en fou, vous n'êtes pas majeur, vous n'avez pas de sous")
}

si on aime les pommes et pas les poires et qu'on a 20 ans
c'est ok
si on aimes les poires mais pas les pommes et qu'on a 20 ans
c'est ok
si on aimes les poires mais pas les pommes et qu'on a 17 ans
fuck
si on aime pas les poires et qu'on aime pas les pommes et qu'on à 20 ans
fuck aussi*/



//Les Boucles

//Boucle TANT QUE (WHILE)

/*var pommes = Lit("Vous aimez les pommes ? (o/n)")
while (pommes != 'o' && pommes != 'n') {
    pommes = Lit("Je n'ai pas compris (o/n)")
}
var poires = Lit("Vous aimez les poires ? (o/n)")
while (poires != 'o' && poires != 'n') {
    poires = Lit("Je n'ai pas compris (o/n)")
}
var age = Lit("Quel est votre age")

if ((pommes == 'o' || poires != 'n') && (+age) > 18) {
    Affiche("Vous aimez les pommes ou les poires")
}
else {
    Affiche("Soit vous n'aimez pas, soit on s'en fou, vous n'êtes pas majeur, vous n'avez pas de sous")
}

la première boucle c'est la tanque (while)
tanque la condition est vrai, on reboucle
dès que la condition est fausse, on sort
le ET logique c'est compris
le != c'est aussi compris normalment
je donne un exemple
au premier coup Tristan n'a pas compris
sur pomme i a rentré X
du coup pomme est different de 'o'
donc la condition pommes != 'o' est Vrai
la deuxième condition pomme est different de 'n'
donc la condition pommes != 'n' est Vrai
en logique booléenne Vrai ET Vrai = Vrai
donc on reboucle
au deuxième tour comme il est bloqué, il rentre o
pommes n'est pas différent de 'o' puisque pommes égale 'o'
donc pommes != 'o' est Faux
pour la deuxième partie
pommes est different de 'n'
donc pommes != 'n' est Vrai
en logique booléenne Faux ET Vrai = Faux
du coup comme on est faux, on sort de la boucle
Une des grandes difficulté de l'informatique c'est de comprendre les conditions
la deuxième difficulté c'est d'être capable de les imaginer et de les écrire*/


//Boucle POUR (FOR)

/*var table = Lit("Quelle table de multiplication ?")

for(var i=1;i<=10;i++)
{
    Affiche(table+" * "+i+" = "+(table*i))
}
ou

var table = Lit("Quelle table de multiplication ?")

for(var compteur=0;compteur<=10;compteur++)
{
    Affiche(table+" * "+compteur+" = "+(table*compteur))
}

la partie var compteur = 0 au premier tour
au tour suivant on fait le compteur ++
du coup au deuxième tour on fait compteur = 0 ++
donc 0 + 1
compteur = 1
la syntaxe du for c'est
for(compteur = debut; condition de fin; incrément à chaque tour)

var table = Lit("Quelle table de multiplication ?")

for(var compteur=1;compteur<=10;compteur+=2)
{
    Affiche(table+" * "+compteur+" = "+(table*compteur))
}

Equivalent en while

var compteur =1
while(compteur<=10)
{
  Affiche(table+" * "+compteur+" = "+(table*compteur))
  compteur = compteur + 2
}*/



//LES TABLEAUX

/*var table = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (var i = 0; i < table.length; i++) {
    Affiche("-------------Table du "+table[i] + "----------------------------")
    for (var j = 1; j<=10;j++) {
        Affiche(table[i] + " * " + j + " = " + (table[i] * j))
    }
}

pour déclarer un tableau
on utilise les []
les  [] vous disent qu'on a un tableau
chaque case du tableau est séparé par une virgule
valeur d'une case : table [indice] = valeur*/



//LES FONCTIONS

/*var table = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (var i = 0; i < table.length; i++) {
    Affiche("-------------Table du "+table[i] + "----------------------------")
    maTable(table[i])
   
}

function maTable(numero)
{
    for (var j = 1; j<=10;j++) {
        Affiche(numero + " * " + j + " = " + (numero * j))
    }
}*/



/*var test = 3.14
var nom = "toto"
var nb = 45

Affiche("la variable test est un entier : " + Number.isInteger(test))
Affiche("la variable nom est un entier : " + Number.isInteger(nom))
Affiche("la variable nb est un entier : " + Number.isInteger(nb))

isInteger répond si c'est vrai ou pas*/


/*var test = 3.14
var nom = "toto"
var nb = 45

Affiche("la variable test est un entier : " + Number.isNaN(test))
Affiche("la variable nom est un entier : " + Number.isNaN(nom))
Affiche("la variable nb est un entier : " + Number.isNaN(nb))
Affiche("la variable nb est un entier : " + Number.isNaN(nb / nom))*/

//NaN en JS signifie Not A Number


/*var test = 3.1445872
var nom = "toto"
var nb = 45.214

Affiche("la variable test est un entier : " + test.toPrecision(3))
//Affiche("la variable nom est un entier : " + nom.toPrecision(2))
Affiche("la variable nb est un entier : " + nb.toPrecision(4))*/

//toPrecision donne le nombre que l'on veut faire apparaître derriere la virgule (virgule comprise)


/*var test = 3.1445872
var nom = "toto"
var nb = 45

Affiche("la variable test est un entier : " + test.toString())
//Affiche("la variable nom est un entier : " + nom.toPrecision(2))
Affiche("la variable nb est un entier : " + nb.toString())
Affiche("la variable nb en binaire est : " + nb.toString(16))*/

//toString Convertit un nombre en chaîne


/*var test = 3.1445872
var nom = "toto"
var nb = 45.34

Affiche("la variable test est un entier : " + test.toFixed())
//Affiche("la variable nom est un entier : " + nom.toPrecision(2))
Affiche("la variable nb est un entier : " + nb.toFixed())
Affiche("la variable nb en binaire est : " + nb.toFixed(2))*/

//toFixed Formate un nombre avec x nombres de chiffres après la virgule décimale


/*var test = 3.1445872
var nom = "toto"
var nb = 45.34

Affiche("la variable test est de type : " + typeof test)
Affiche("la variable nom est de type : " + typeof nom)
Affiche("la variable nb est de type : " + typeof nb)*/

/*var test = 3.1445872
var nom = "toto"
var nb = 45.34
var monTab = [1,2,3,4,5]
var monTest = true

Affiche("la variable test est de type : " + typeof test)
Affiche("la variable nom est de type : " + typeof nom)
Affiche("la variable nb est de type : " + typeof nb)
Affiche("la variable monTab est de type : " + typeof monTab)
Affiche("la variable monTest est de type : " + typeof monTest)*/




/*var nom = "       Lorem ipsum dolor, SIT amet cOnsectetur         "
var ch2 = "coucou"

Affiche("la caractère à la 10 ème place est : " + nom.charAt(9))
Affiche("la code ASCII à la 5 ème place est : " + nom.charCodeAt(4))
Affiche("la concatenation de ch2 et nom est : " + ch2.concat(nom))
Affiche("la 1ère position de ipsum nb est : " + nom.indexOf("ipsum"))
Affiche("la dernière position de ipsum nb est : " + nom.lastIndexOf("ipsum"))
Affiche("la taille de la chaine est : " + nom.length)
Affiche("la sous chaine de 4 sur 7 char est : " + nom.substr(4, 7))
Affiche("la chaine en majuscule est : " + nom.toUpperCase())
Affiche("la chaine en minuscule est : " + nom.toLowerCase())
Affiche("la chaine sans espaces est : |" + nom.trim()+"|")*/



/*var nb = -3.6572

Affiche("la valeur absolue de nb est : " + Math.abs(nb))
Affiche("le cosinus de nb est : " + Math.cos(nb))
Affiche("le carré de nb est : " + Math.pow(nb, 2))
Affiche("la valeur arrondie de nb à l'entier est : " + Math.round(nb))
Affiche("la valeur arrondie de nb à 2 decimales est : " + (Math.round(nb*100)/100))*/



var monTab = ["toto", "tata", "tutu"]
var vevere = ["toutou"]
var nbCharTab = 0

Affiche("la concatenation est : " + monTab.concat(vevere))
Affiche("La taille de mon tableau est : " + monTab.length)

monTab.forEach(compterChar);
Affiche("La nombre de char dans mon tableau est : " + nbCharTab)

Affiche("j'ajoute une chaine à mon tableau : " + monTab.push("test"))
monTab.forEach(affTab);
Affiche("Je retire la première case ")
monTab.shift();
monTab.forEach(affTab);
Affiche("Je retire la dernière case ")
monTab.pop();
monTab.forEach(affTab);
Affiche("Je trie le tableau ")
monTab.sort();
monTab.forEach(affTab);

function affTab(item, index) {
    Affiche(item)
}

function compterChar(item, index) {
    nbCharTab+=item.length
}



var d = new Date();

Affiche("la date du jour est : " + d)
Affiche("la numéro du jour du mois est : " + d.getDate())
Affiche("la numéro du jour de la semaine est : " + d.getDay())
Affiche("la numéro du jour de la semaine est : " + d.getFullYear())
Affiche("l'heure actuelle est : " + d.getHours())
Affiche("Nous sommes le : " + d.getDate() + "/"+ d.getMonth()+ "/"+ d.getFullYear())