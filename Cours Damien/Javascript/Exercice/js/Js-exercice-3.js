
var montantHT, montantTVA, montantTTC, remise, Taux_remise;
const Taux_TVA=20;

montantHT=parseInt(window.prompt('Montant HT'));
console.log(montantHT);

remise=window.prompt('remise');
console.log(remise);

if(remise=='Oui')
{
    Taux_remise=parseFloat(window.prompt('Taux_remise'));
    console.log(Taux_remise);
}


else
{
    
}


montantTVA=montantHT*Taux_TVA/100;
montantTTC=montantHT+montantTVA;
montantRemise=montantTTC*Taux_remise/100;
montantTotal=montantTTC-remise;
console.log(montantTotal);
document.write('<p>Montant Total:'+montantTotal+'</p>');
if(remise=='Oui')
{
    document.write('<p>Montant remise:'+montantRemise+'</p>');
}



//CORRECTION

/*const TAUX_TVA=20;

var montant HT, existanceRemise, tauxRemise, montantTVA, montantTTC, montantRemise,

montantHT=parseFloat(window.prompt('Montant HT ?'));
existanceRemise=window.prompt('Remise ? (oui/non)')=='oui';   //OU// existanceRemise=window.confirm('Remise'); 

if(existanceRemise)
{
tauxRemise=parseFloat(window.prompt('Taux remise ?'));
}
else
{
    tauxRemise=0;
}
(On peut l'écrire if et else aussi:  tauxRemise=existanceRemise=='oui'?parseFloat(window.prompt('Taux remise?')):0;)

montantTVA=montantHT*TAUX_TVA/100;
montantTTC=montantHT+montantTVA;
montantRemise=montantTTC*tauxRemise/100;
montantTotal=montantTTC-montantRemise;
document.write('<p>Montant Total:'+montantTotal'+'</p>);
if(existanceRemise)
{
    document.write('<p>Montant remise:'+montantRemise'+'</p>);
}*/