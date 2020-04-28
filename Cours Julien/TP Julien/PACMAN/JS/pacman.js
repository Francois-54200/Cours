let maGrille = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ]


  let pacman = {
    //position de départ de Pacman sur la grille
    y:2,
    x:5,
    //direction de départ de pacman (haut:4, bas:2, gauche:3, droite:1)
    direction:1
}

function afficheGrille(){
    document.getElementById('grille').innerHTML = " ";

for (let i in maGrille) {
    
    for (let j in maGrille[i]) {
        var maConsoleGrille = document.createElement('div')
        if (maGrille[i][j]==0) {
            maConsoleGrille.classList.add('mur');
        }
            else if (maGrille[i][j]==1) {
                maConsoleGrille.classList.add('sol');
            }
                else if (maGrille[i][j]==2) {
                    maConsoleGrille.classList.add('bonbon');
                }
    maConsoleGrille.style.gridRow=parseInt(i)+1
    maConsoleGrille.style.gridColumn=parseInt(j)+1
    document.getElementById('grille').appendChild(maConsoleGrille)    
    }
    
}
}

function affichePacman(){
    var myPacman = document.createElement('div') //créé une div
    myPacman.classList.add('pacman') //ajout de la classe pacman a la div
    myPacman.style.gridRow=pacman.y   // permet d'écrire comme si c'était dans le css
    myPacman.style.gridColumn=pacman.x
    document.getElementById('grille').appendChild(myPacman) //on ajoute la div pacman dans grille
    
}

function bougePacman(){

    
    if (pacman.direction == 1){
        pacman.x++
    }
        
    if(maGrille[pacman.y-1][pacman.x-1]==0)
{
        // là pacman est dans un mur
}
}


function refresh(){
    setTimeout(refresh, 150)
    afficheGrille()
    affichePacman()
    bougePacman()

    console.log("je rafraichi ma page")
}
refresh()



