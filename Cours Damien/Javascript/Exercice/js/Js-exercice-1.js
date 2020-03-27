console.log("Ficher chargé");

var montantHT;
montantHT=window.prompt('Montant HT');
console.log(montantHT);

var montantTVA;
montantTVA=window.prompt('Taux TVA');
console.log(montantTVA);

var montantTTC;
/*montantTTC=window.prompt('Montant TTC');
console.log(montantHT*TAUX_TVA/100);*/



montantHT=parseInt(montantHT);
montantTVA=parseInt(montantHT*montantTVA/100);
montantTTC=parseInt(montantHT+montantTVA);

montantTTC=montantHT+montantTVA;
console.log(montantTTC);
window.alert('Montant TTC '+montantTTC);


//CORRECTION

/*console.log("Ficher chargé");

var taux_TVA, montantHT, montantTVA, montantTTC;
taux_TVA=parseFloat(window.prompt('Taux_TVA?'));
montantHT=parseFloat(window.prompt('Montant HT?'));

//console.log(Taux_TVA, montantHT);

montantTVA=montantHT*Taux_TVA/100;
montantTTC=montantHT+montantTVA;

window.alert('montant TTC: '+montantTTC);