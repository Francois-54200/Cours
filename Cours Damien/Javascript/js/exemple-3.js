console.log("Ficher chargé");
const TAUX_TVA=20;
var montantHT;
var montantTVA;
var montantTTC; // on peut l'écrire: var montantHT, montantTVA, montantTTC;

montantHT=100;
montantTVA=montantHT*TAUX_TVA/100;
montantTTC=montantHT+montantTVA;
console.log(montantHT, montantTVA, montantTTC);