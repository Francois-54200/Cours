class Voiture
{
  Marque;
  Modele;
  Couleur;
constructor(marque, modele , couleur)
{
    this.Marque=marque
    this.Modele=modele
    this.Couleur=couleur
}
roule() {
return "Vroum vroum"
}
}

let maVoiture = new Voiture("opel","corsa","rouge")
let laVoitureAThomas = new Voiture("peugeot","207","bleu")
let laVoitureAMuhMuh = new Voiture("Merco","Benz","gris")

console.log(laVoitureAThomas.Marque+" "+laVoitureAThomas.Modele+" "+laVoitureAThomas.Couleur+" ")
console.log(laVoitureAMuhMuh)
console.log(laVoitureAMuhMuh.Couleur+" "+laVoitureAMuhMuh.roule())