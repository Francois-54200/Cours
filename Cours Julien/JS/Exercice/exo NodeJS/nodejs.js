/*'use strict'; 
  
// Declare a boolean variable. 
var boolean = true; 
console.log(boolean); 
  
// Declare a number variable. 
var number = 42; 
console.log(number); 
  
// Declare a string variable. 
var string = "Hello world !"; 
console.log(string); 
  
// Declare a null variable. 
var null_ = null; 
console.log(null_); 
  
// Declare a not defined variable. 
var undefined_; 
console.log(undefined_);*/


/*'use strict'; 
  
var a = 2; 
var b = 2; 
var c = 2; 
  
if (a === b && b === c) { 
    console.log("Les 3 variables sont identiques.");  
} else { 
    if (b === c || a === c || a === b) { 
        console.log("2 des variables sont de valeurs égales."); 
    } else { 
        console.log("Les 3 variables sont différentes."); 
    } 
}*/



/*'use strict'; 
  
var quantity = 5, 
    unit = 'K', 
    result 
; 
    if (unit === 'K') {
        result = 1024 * quantity;
    }
        else if (unit === 'M') {
            result = 1024 * 1024 * quantity;
        }
        else if (unit === 'G') {
            result = 1024 * 1024 * 1024 * quantity;
        }
        else if (unit === 'T') {
            result = 1024 * 1024 * 1024 * 1024 * quantity;
        }
        else {
            result = false;
        }

// TODO: Coder l'algorithme de transformation ici. 
  
console.log(result); // Affiche le résultat (avec les valeurs par défaut, cela donnera 2048).*/

  
// Résolution avec switch. 
/*switch (unit) { 
    case 'K': 
        result = 1024 * quantity; 
        break; 
    case 'M': 
        result = 1024 * 1024 * quantity; 
        break; 
    case 'G': 
        result = 1024 * 1024 * 1024 * quantity; 
        break; 
    case 'T': 
        result = 1024 * 1024 * 1024 * 1024 * quantity; 
        break; 
    default: 
        result = false; 
} 
  
console.log(result);*/


/*var a = 'c'; 
var b = 0; 
  
switch (a) { 
    case 'w': 
        b++; // Incrémente la valeur de b de 1. 
        //fall through 
    case 'x': 
        b++; 
        break; 
    case 'y': 
    case 'z': 
        b++; 
        break; 
    default: 
        b = false; 
} 
  
console.log(b)*/



