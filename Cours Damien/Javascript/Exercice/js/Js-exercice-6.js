function random(min, max)
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

var stock=random(0,5);
console.log(stock);

var nombre;
var compteur=0;

while (nombre != stock)
{
    nombre=window.prompt('Quel est le nombre secret');
    if (nombre<stock)
    {
        window.alert('Le nombre est inf.');
    }
    else if (nombre>stock)
    {
        window.alert('Le nombre est sup.');
    }
    compteur++;
};

window.alert('Félicitation vous avez réussi en '+compteur);


//CORRECTION

/*function getRandomIntInclusive(min, max)     
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

var nombreAtrouver=getRandomIntInclusive(0,100);
console.log(nombreAtrouver);

var nombreDeTentative;
var nombreSaisi;

do
{
    nombreDeTentative++;
    do
    {
        nombreSaisi= window.prompt('Saisir un nombre autour de 0 et 100(inclus)');
    }
    while(isNaN(nombreSaisi));

    if(nombreAtrouver>nombreSaisi)
    {
        window.alert('Le nombre a trouver est supérieur à '+nombreSaisi);
    }
    else if (nombreAtrouver<nombre Saisi)
    {
        window.alert('Le nombre a trouver est inférieur à '+nombreSaisi);
    }
}
while(nombreSaisi!=nombreAtrouver);

window.alert('Vous avez trouvé en '+nombreDeTentative+'tentatives');*/