let MaVoiture = [new voiture("mini", "John Cooper Works", "Black", "231ch")]

function afficheVoiture(){  //grille
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