function refresh(){

//HEURES

let maDate=new Date()
console.log(maDate.getHours())

let monAngleHeure=(270+maDate.getHours()*30)
let elemAiguilleHeure=document.getElementById("heures")

elemAiguilleHeure.style.transform="rotate("+monAngleHeure+"deg)"


//MINUTES

console.log(maDate.getMinutes())

let monAngleMinute=(270+maDate.getMinutes()*6)
let elemAiguilleMinute=document.getElementById("minutes")

elemAiguilleMinute.style.transform="rotate("+monAngleMinute+"deg)"

//SECONDES

console.log(maDate.getSeconds())

let monAngleSeconde=(270+maDate.getSeconds()*6)
let elemAiguilleSeconde=document.getElementById("secondes")

elemAiguilleSeconde.style.transform="rotate("+monAngleSeconde+"deg)"

}

setInterval(refresh,500)


/*function refresh(){


//HEURES
let elem=document.getElementById("heures")

let rotation_heures;

let maDate= new Date()
let heures=date.getHeures()

maDate.getHours()


rotation_heures=(heures*30)+270

elem.style.transform="rotate("+rotation_heures+"deg)"


//MINUTES
elem=document.getElementById("minutes")

let rotation_minutes;

let maDate=new Date()
heures=date.getMinutes()

rotation_heures=(heures*6)+270

elem.style.transform="rotate("+rotation_minutes+"deg)"


// SECONDES
elem=document.getElementById("secondes")

let rotation_secondes;

let maDate=new Date()
heures=date.getMecondes()

rotation_heures=(heures*6)+270

elem.style.transform="rotate("+rotation_secondes+"deg)"

}

setInterval(refresh,500)
*/