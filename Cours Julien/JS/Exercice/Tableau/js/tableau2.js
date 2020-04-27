var Notes=[[14, 9, 11], [4, 15, 8], [12, 14, 7]]


for ( i=0 ; i < Notes.length; i++){
    var monElem = document.createElement('tr')
    
    for ( j=0 ; j < Notes[i].length; j++){

        var monElem2 = document.createElement('td')

        monElem2.innerHTML = Notes[i][j];
        monElem.appendChild(monElem2)
        } 

        document.getElementById('Notes').appendChild(monElem)

}

/*OU

var Notes=[[14, 9, 11], [4, 15, 8], [12, 14, 7]]


for ( i=0 ; i < Notes.length; i++){
    var monElem = document.createElement('tr')
    
    for ( j=0 ; j < Notes[i].length; j++){

        monElem.innerHTML += "<td> "+Notes[i][j]+" </td>";

        } 

        document.getElementById('Notes').appendChild(monElem)


}*/

/*  OU

let monTab = [
            [12, 10, 15],
            [10, 9, 14],
            [12, 13, 7]
        ]

        for (var i in monTab) {
            let monElem = document.createElement('tr')
            for (var j in monTab[i]) {
                monElem.innerHTML += "<td>" + monTab[i][j] + "</td>"
            }
            document.getElementById('maTable').appendChild(monElem)
        }

*/
//appendChild permet d'envoyer l'élèment dans le HTML