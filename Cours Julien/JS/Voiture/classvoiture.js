class Voiture{
    Marque;
    Modele;
    Couleur;
    Puissance;
    constructor(marque, modele , couleur, puissance) {
        this.Marque = marque;
        this.Modele = modele;
        this.Couleur=couleur;
        this.Puissance=puissance;
    }
    roule() {
        return "Vroum vroum vroum";
    }
    get Marquea() {
        return "Voiture de marque " + this.Marque;
    }
    set Marquea(laMarque) {
        this.Marque = laMarque;
    }
    get Modelea() {
        return "Voiture de modele " + this.Modele;
    }
    set Modelea(leModele) {
        this.Modele = leModele
    }
}

let mavoiture = new Voiture("Mini", "Cooper Johns Works", "black", '231ch')

console.log(mavoiture.Marque)
console.log(mavoiture.Modele)
console.log(mavoiture.Couleur)
console.log(mavoiture.Puissance)
console.log(mavoiture.roule())



tabVoit = []
tabVoit.push(new Voiture("Mini", "Cooper Johns Works", "black", '231ch'))
tabVoit.push(new Voiture("VW", "Golf R32", "Blue", '250ch'))
tabVoit.push(new Voiture("Mercedes-AMG", "A 45S", "White", '421ch'))
let monCont = document.getElementById('contenu')

let maTable = document.createElement('table')
maTable.border = 1
for (let i in tabVoit) {
    ajoutLigneTable(maTable, tabVoit[i])
}
monCont.appendChild(maTable)

function ajoutLigneTable(table, voit) {
    let maLigne = document.createElement('tr')
    let maMarque = document.createElement('td')
    maMarque.innerHTML = voit.Marque
    maLigne.appendChild(maMarque)
    let monModele = document.createElement('td')
    monModele.innerHTML = voit.Modele
    maLigne.appendChild(monModele)
    let maCouleur = document.createElement('td')
    maCouleur.innerHTML = voit.Couleur
    maLigne.appendChild(maCouleur)
    let maPuissance = document.createElement('td')
    maPuissance.innerHTML = voit.Puissance
    maLigne.appendChild(maPuissance)
    table.appendChild(maLigne)
}



//OU

/*
class voiture{
    marque;
    modele;
    puissance;
    constructor(marque, modele, puissance){
        this.marque = marque;
        this.modele = modele;
        this.puissance = puissance;
    }
    roule(){
        console.log("La " + this.marque + " " + this.modele + " roule");
    }
}

let voitures = [];
voitures.push(new voiture("Peugeot", "205 Turbo 16", "200ch"));
voitures.push(new voiture("Mazda", "RX7 (FB)", "115ch"));
voitures.push(new voiture("Ferrari", "F40", "478ch"));
let tab = document.getElementById("tab");

voitures.forEach(voitureActuelle => {
    tab.innerHTML = tab.innerHTML + "<tr><td>" + voitureActuelle.marque + "</td>" + "<td>" + voitureActuelle.modele + "</td>" + "<td>" + voitureActuelle.puissance + "</td>" + "</tr>";
});
*/