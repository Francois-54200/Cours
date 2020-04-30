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


refresh()
myPacman=affichePacman
myFantome=afficheFantome