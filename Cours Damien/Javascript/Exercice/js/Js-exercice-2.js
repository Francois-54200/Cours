console.log("Fichier chargé");

var dateDuJour=new Date();

var jours=['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var mois=['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septemnre', 'Octobre', 'Novembre', 'Décembre'];


console.log(jours[dateDuJour.getDay()]);
console.log(dateDuJour.getDate());
console.log(mois[dateDuJour.getMonth()]);
console.log(dateDuJour.getFullYear());

document.write('Nous sommes le '+jours[dateDuJour.getDay()]+' '+ dateDuJour.getDate()+' ' +mois[dateDuJour.getMonth()]+' '+dateDuJour.getFullYear())

