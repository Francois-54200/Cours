let maGrille = [    //grille
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

    let myPacman = new pacman(1, 2, 1)

    let TabFantome = [ new Fantome("fantome",11,10,1), new Fantome("fantome1",11,8,1), new Fantome("fantome2",10,9,1), new Fantome("fantome0",12,9,1)]
    
    let score = 0

function afficheGrille(){  //grille
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function appuiTouche(e){  //pour faire déplacer en appuyant sur les touches
    console.log(e.key)
    if(e.key=="z"){
        myPacman.Direction=4
    }
    else if(e.key=="q"){
        myPacman.Direction=3
    }
    else if(e.key=="s"){
        myPacman.Direction=2
    }
    else if(e.key=="d"){
        myPacman.Direction=1
    }
}

function GameOver(numFant){
    if(myPacman.X==TabFantome[numFant].X && myPacman.Y==TabFantome[numFant].Y){
        alert("Pacman is dead")
        return true
    }
    return false 
}


function afficheScore(){
    document.getElementById('score').innerHTML=score
}

function Victoire(){  //grille
    let compteur=0
    for (let i in maGrille) {
        for (let j in maGrille[i]) {
            
            if (maGrille[i][j]==2) {
                compteur++
            }
}
}
if (compteur==0){
    alert("The Winner is Me")
    return true
}
    return false
}

function refresh(){
    let onContinue = true
    
    myPacman.bougePacman()
    
    for(let i in TabFantome)
    {
    if(GameOver(i)) {onContinue = false}
    TabFantome[i].bougeFantome()
        
    if(GameOver(i)){onContinue = false}
    }
    afficheGrille()
    myPacman.affichePacman()
    for(let i in TabFantome){
        TabFantome[i].afficheFantome()
    }    
    afficheScore()
    Victoire()
    if (Victoire()){onContinue = false}
    if (onContinue==true){setTimeout(refresh, 250)}
}
refresh()
document.body.addEventListener("keydown",appuiTouche)