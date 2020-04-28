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
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
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
    x:1,
    //direction de départ de pacman (haut:4, bas:2, gauche:3, droite:1)
    direction:1
}

    let score = 0

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

    else if (pacman.direction ==2) {
        pacman.y++
    }

    else if (pacman.direction ==3) {
        pacman.x--
    }

    else if (pacman.direction ==4) {
        pacman.y--
    }
        
    if(maGrille[pacman.y-1][pacman.x-1]==0)
{
    if (pacman.direction == 1){
        pacman.x--
    }

    else if (pacman.direction ==2) {
        pacman.y--
    }

    else if (pacman.direction ==3) {
        pacman.x++
    }

    else if (pacman.direction ==4) {
        pacman.y++
    }  // là pacman est dans un mur
}
    if(maGrille[pacman.y-1][pacman.x-1]==2){
        maGrille[pacman.y-1][pacman.x-1]=1
        score=score+1  //ou score++
    }
}

function appuiTouche(e){
    console.log(e.key)
    if(e.key=="z"){
        pacman.direction=4
    }
    else if(e.key=="q"){
        pacman.direction=3
    }
    else if(e.key=="s"){
        pacman.direction=2
    }
    else if(e.key=="d"){
        pacman.direction=1
    }
}

function afficheScore(){
    document.getElementById('score').innerHTML=score

}


function refresh(){
    setTimeout(refresh, 550)
    bougePacman()
    afficheGrille()
    affichePacman()    
    afficheScore()

   // console.log("je rafraichi ma page")
}
refresh()
document.body.addEventListener("keydown",appuiTouche)



