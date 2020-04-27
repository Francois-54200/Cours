/*var monObj = {
    nom : "Demettre",
    prenom : "Julien"
  }

  for(let i in monObj)
  {
    var monElem = document.createElement('p')

    monElem.innerHTML=("Mon "+ i+" est "+monObj[i])

    document.getElementById('bonjour').appendChild(monElem)
  }*/



// Je créé mon tableau d'objets
var monTab = [
  {
    nom: "Tristan",
    notes: [12, 10, 15]
  },
  {
    nom: "Stéphane",
    notes: [10, 9, 14]
  },
  {
    nom: "Fabien",
    notes: [12, 13, 7]
  }]

// Je fais une boucle qui parcours le premier tableau
for (var i in monTab) {
  //Je créé un élément HTML de type TR ligne de table
  let monElem = document.createElement('tr')
  //J'ajoute un id à ma ligne
  monElem.id = "Ligne"+i

  //Je créé un élément HTML de type TD cellule de table pour le nom de l'élève
  var monTdEl = document.createElement('td')
  monTdEl.innerHTML = monTab[i].nom
  //J'ajoute le nom de l'élève à la ligne
  monElem.appendChild(monTdEl)

  // Je fais une boucle pour parcourir les notes
  for (var j in monTab[i].notes) {
    //Je créé un élément de type TD pour une note
    var monTd = document.createElement('td')
    monTd.innerHTML = monTab[i].notes[j];
    //J'ajoute la note à la ligne
    monElem.appendChild(monTd)
  }

  //Je créé un élément de type TD pour les bouttons
  var monTdEdit = document.createElement('td')

  //Je créé le boutton d'édition
  var monbutEdit = document.createElement('input')
  monbutEdit.type = "button"
  monbutEdit.value = "Edit"
  //J'ajoute la gestion du clic sur supp
  monbutEdit.addEventListener("click", editLigne("Ligne"+i));

  //J'ajoute le bouton dans la cellule
  monTdEdit.appendChild(monbutEdit)
  //Je créé le boutton de suppréssion
  var monbutSup = document.createElement('input')
  monbutSup.type = "button"
  monbutSup.value = "Sup"
  //J'ajoute la gestion du clic sur supp
  monbutSup.addEventListener("click", suppLigne("Ligne"+i));
  //J'ajoute le boutton dans la cellule
  monTdEdit.appendChild(monbutSup)
  //J'ajoute les boutons à la ligne
  monElem.appendChild(monTdEdit)

  //J'ajoute la ligne dans la table
  document.getElementById('maTable').appendChild(monElem)
}


function suppLigne(id)
{
  return function(e)
  {
    // Code que je veux executer quand on appelle ma fonction
    // ici quand on cliquera sur l'élément
    // Vous pouvez même utiliser id ici !
    document.getElementById(id).remove()
  }
}

function editLigne(id)
{
  return function(e)
  {
    // Code que je veux executer quand on appelle ma fonction
    // ici quand on cliquera sur l'élément
    // Vous pouvez même utiliser id ici !
    document.getElementById(id).innerHTML=" "
  }
}