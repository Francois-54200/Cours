/*function direBonjour(prénom)
{
    window.alert(' Bonjour '+ prénom);
}

direBonjour('Thomas');


var a=2;
function testerPorteeVariable()
{
    console.log(a);
    b=3;
}

testerPorteeVariable();
console.log(b);*/


/*function additionner()   // A NE PAS FAIRE CAR MAUVAISE CONSTRUCTION
{
    somme=nombre1+nombre2;
}

var nombre1=2;
var nombre2=3;
var somme;

additionner();
console.log(somme);*/

/*function additionner(nombre1, nombre2)   // BONNE FACON DE FAIRE
{
    var somme=nombre1+nombre2;
    return somme;
}

var nombre1=2;
var nombre2=3;
var somme;

somme=additionner(nombre1, nombre2);
console.log(somme);*/


function getRandomIntInclusive(min, max)     //Exemple concret
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomIntInclusive(0,100));