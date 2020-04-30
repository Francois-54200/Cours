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

bougeFantome(){
    this.direction=getRandomInt(4)
    
    if (this.direction == 1){
        this.x++
    }

    else if (this.direction ==2) {
        this.y++
    }

    else if (this.direction ==3) {
        this.x--
    }

    else if (this.direction ==4) {
        this.y--
    }
    if(maGrille[this.y-1][this.x-1]==0)
    {
        if (this.direction == 1){
            this.x--
        }
    
        else if (this.direction ==2) {
            this.y--
        }
    
        else if (this.direction ==3) {
            this.x++
        }
    
        else if (this.direction ==4) {
            this.y++
        }  
    }
}




refresh()
myPacman=affichePacman
myFantome=afficheFantome