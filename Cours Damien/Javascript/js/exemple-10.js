var compteur;

for(compteur=0;compteur<=10;compteur++)  //compteur++  =>  compteur=compteur+1  ;  compteur=compteur+2 => compteur+=2
{
    document.write('<div>je veux '+compteur+' ananas</div>');
}

var jours=['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
console.log(jours.length);

for(var i=0; i<=jours.length-1; i++)   //Boucle de base en JS pour parcourir un tableau
{
    console.log(jours[i], jours[i].length);
}

