console.log("Ficher chargé");
var prénom;
prénom=window.prompt('Prénom ?');
console.log(prénom);

/*var age=window.prompt("Age ?"); //ou on peut aussi écrire: (voir la ligne du dessous)*/
/*var age=parseInt(window.prompt("Age ?"));*/  //parseInt ne permet pas d'avoir le chiffre derriere la virgule 
var age=parseFloat(window.prompt("Age ?"));  //parseFloat("27.5") ca permet d'avoir les décimales
console.log(age);