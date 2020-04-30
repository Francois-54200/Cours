class Fantome {
    Nom;
    Y;
    X;
    Direction;
    constructor(nom, y, x, direction) {
        this.Nom = nom;
        this.X = x;
        this.Y = y;
        this.Direction = direction;
    }

    afficheFantome() {
        let myFantome = document.createElement('div')
        myFantome.classList.add('fantome')
        myFantome.style.gridRow = this.Y
        myFantome.style.gridColumn = this.X
        document.getElementById('grille').appendChild(myFantome)

    }
    bougeFantome() {
        this.Direction = getRandomInt(4)

        if (this.Direction == 1) {
            this.X++
        }

        else if (this.Direction == 2) {
            this.Y++
        }

        else if (this.Direction == 3) {
            this.X--
        }

        else if (this.Direction == 4) {
            this.Y--
        }
        if (maGrille[this.Y - 1][this.X - 1] == 0) {
            if (this.Direction == 1) {
                this.X--
            }

            else if (this.Direction == 2) {
                this.Y--
            }

            else if (this.Direction == 3) {
                this.X++
            }

            else if (this.Direction == 4) {
                this.Y++
            }
        }
    }

}
