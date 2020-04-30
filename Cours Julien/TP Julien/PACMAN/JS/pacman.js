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

/*let fantome = {       //seulement pôur afficher un seul fantome
    //position de départ de Pacman sur la grille
    y:11,
    x:10,
    //direction de départ de pacman (haut:4, bas:2, gauche:3, droite:1)
    direction:1
} */

    let TabFantome = [      //pour afficher plusieurs fantomes, il faut faire un tableau
        {
            nom:"fantome",
            y:11,
            x:10,
            direction:1
        },
        {
            nom:"fantome1",
            y:11,
            x:8,
            direction:1
        },
        {
            nom:"fantome2",
            y:10,
            x:9,
            direction:1
        },
        {
            nom:"fantome0",
            y:12,
            x:9,
            direction:1
        }
    ]

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

/*function afficheFantome(){       //Pour un seul fantome
    var myFantome = document.createElement('div') //créé une div
    myFantome.classList.add('fantome') //ajout de la classe fantome a la div
    myFantome.style.gridRow=fantome.y   // permet d'écrire comme si c'était dans le css
    myFantome.style.gridColumn=fantome.x
    document.getElementById('grille').appendChild(myFantome) //on ajoute la div fantome dans grille
    
}*/

function afficheFantome(numFant){   //pour plusieurs fantomes
    var myFantome = document.createElement('div') //créé une div
    myFantome.classList.add('fantome') //ajout de la classe fantome a la div
    myFantome.style.gridRow=TabFantome[numFant].y   // permet d'écrire comme si c'était dans le css
    myFantome.style.gridColumn=TabFantome[numFant].x
    document.getElementById('grille').appendChild(myFantome) //on ajoute la div fantome dans grille
    
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

    if(pacman.x>maGrille[0].length){ //pour faire passer pacman par le couloir de droite car il va plus loin que la grille
        pacman.x=1
    }

    if(pacman.x<1){    // pour faire passer pacman dans le couloir de gauche a droite car la grille ne peut pas etre inferieure
        pacman.x=maGrille[0].length
    }

    if(maGrille[pacman.y-1][pacman.x-1]==2){
        maGrille[pacman.y-1][pacman.x-1]=1
        score=score+1  //ou score++
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/*function bougeFantome(){    //Pour un seul fantome

    fantome.direction=getRandomInt(4)
    
    if (fantome.direction == 1){
        fantome.x++
    }

    else if (fantome.direction ==2) {
        fantome.y++
    }

    else if (fantome.direction ==3) {
        fantome.x--
    }

    else if (fantome.direction ==4) {
        fantome.y--
    }
    if(maGrille[fantome.y-1][fantome.x-1]==0)
    {
        if (fantome.direction == 1){
            fantome.x--
        }
    
        else if (fantome.direction ==2) {
            fantome.y--
        }
    
        else if (fantome.direction ==3) {
            fantome.x++
        }
    
        else if (fantome.direction ==4) {
            fantome.y++
        }  
    }
     // là le fantome est dans un mur
}*/

function bougeFantome(numFant){    //Pour avoir plusieurs fantomes

    TabFantome[numFant].direction=getRandomInt(4)
    
    if (TabFantome[numFant].direction == 1){
        TabFantome[numFant].x++
    }

    else if (TabFantome[numFant].direction ==2) {
        TabFantome[numFant].y++
    }

    else if (TabFantome[numFant].direction ==3) {
        TabFantome[numFant].x--
    }

    else if (TabFantome[numFant].direction ==4) {
        TabFantome[numFant].y--
    }
    if(maGrille[TabFantome[numFant].y-1][TabFantome[numFant].x-1]==0)
    {
        if (TabFantome[numFant].direction == 1){
            TabFantome[numFant].x--
        }
    
        else if (TabFantome[numFant].direction ==2) {
            TabFantome[numFant].y--
        }
    
        else if (TabFantome[numFant].direction ==3) {
            TabFantome[numFant].x++
        }
    
        else if (TabFantome[numFant].direction ==4) {
            TabFantome[numFant].y++
        }  
    }
     // là le fantome est dans un mur
}

function appuiTouche(e){  //pour faire déplacer en appuyant sur les touches
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

function GameOver(numFant){
    if(pacman.x==TabFantome[numFant].x && pacman.y==TabFantome[numFant].y){
        alert("Pacman is dead")
        return true
    }
    return false 
}
    

function afficheScore(){
    document.getElementById('score').innerHTML=score
}

function Victoire(){
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
    
    bougePacman()
    
    for(let i in TabFantome)
    {
    if(GameOver(i)) {onContinue = false}
    bougeFantome(i)
        //bougeFantome()    pour un seul fantome
    if(GameOver(i)){onContinue = false}
    }
    afficheGrille()
    affichePacman()
    for(let i in TabFantome){
    afficheFantome(i)
    }    
    afficheScore()
    Victoire()
    if (Victoire()){onContinue = false}
    if (onContinue==true){setTimeout(refresh, 250)}
}
refresh()
document.body.addEventListener("keydown",appuiTouche)



//Pacman en version class


class pacman {
    Y;
    X;
    Direction;
constructor(x, y, direction)
{
    this.X=x
    this.Y=y
    this.Direction=direction
}
affichePacman(){
    myPacman = document.createElement('div')
    myPacman.classList.add('pacman')
    myPacman.style.gridRow=this.Y
    myPacman.style.gridColumn=this.X
    document.getElementById('grille').appendChild(myPacman)
}
bougePacman(){
    if (this.Direction == 1){
        this.X++
    }

    else if (this.Direction ==2) {
        this.Y++
    }

    else if (this.Direction ==3) {
        this.X--
    }

    else if (this.Direction ==4) {
        this.Y--
    }
        
    if(maGrille[this.Y-1][this.X-1]==0)
{
    if (this.Direction == 1){
        this.X--
    }

    else if (this.Direction ==2) {
        this.Y--
    }

    else if (this.Direction ==3) {
        this.X++
    }

    else if (this.Direction ==4) {
        this.Y++
    }
}

    if(this.X>maGrille[0].length){ 
        this.X=1
    }

    if(this.X<1){  
        this.X=maGrille[0].length
    }

    if(maGrille[this.Y-1][this.X-1]==2){
        maGrille[this.Y-1][this.X-1]=1
        score=score+1 
    }
}
}

class Fantome{
    Nom;
    Y;
    X;
    Direction;
constructor (nom, y, x, direction)
{
    this.Nom=nom;
    this.X=x;
    this.Y=y;
    this.Direction=direction;
}

afficheFantome(){
    myFantome = document.createElement('div')
    myFantome.classList.add('fantome')
    myFantome.style.gridRow=this.Y
    myFantome.style.gridColumn=this.X
    document.getElementById('grille').appendChild(myFantome)
    
}
}

let TabFantome = [ new Fantome("fantome",11,10,1), new Fantome("fantome1",11,8,1), new Fantome("fantome2",10,9,1), new Fantome("fantome0",12,9,1)]

for(let i in TabFantome)
{
    TabFantome[i].afficheFantome()
}
bougeFantome(numFant){

    TabFantome[numFant].direction=getRandomInt(4)
    
    if (TabFantome[numFant].direction == 1){
        TabFantome[numFant].x++
    }

    else if (TabFantome[numFant].direction ==2) {
        TabFantome[numFant].y++
    }

    else if (TabFantome[numFant].direction ==3) {
        TabFantome[numFant].x--
    }

    else if (TabFantome[numFant].direction ==4) {
        TabFantome[numFant].y--
    }
    if(maGrille[TabFantome[numFant].y-1][TabFantome[numFant].x-1]==0)
    {
        if (TabFantome[numFant].direction == 1){
            TabFantome[numFant].x--
        }
    
        else if (TabFantome[numFant].direction ==2) {
            TabFantome[numFant].y--
        }
    
        else if (TabFantome[numFant].direction ==3) {
            TabFantome[numFant].x++
        }
    
        else if (TabFantome[numFant].direction ==4) {
            TabFantome[numFant].y++
        }  
    }
}




refresh()
myPacman=affichePacman