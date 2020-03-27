
//Le Javascript
Le javascript est balisé par <script>...</script>



//Récupérer la valeur de la balise (Ex:<input id="idNme" value="tot"/>)
réponse= document.getElementById("idName").value ==> Ex: toto
Donc réponse a pour valeur = toto

//Inversement
document.getElementById("idName").value = 25;

//Affecter un item (chaine de caractères, du html ou du numérique)
(Ex: <div id="idName">...</div)
document.getElementById("idName").innerHTML = "mon TEXT en html ou non";

//Inversement
monHtml = document.getElementById("idName").innerHTML;

//Déclaration d'une fonction
function nomDeLaFonction(var1,var2){
    ....
}

Appeler la fonction
var decla1 = 1
var decla2 = 2

nomDeLaFonctionnomDeLaFonction(decla1,decla2,...)

maFonction(var1,var2){
    total= var1 * var2;
    return total;
}

ret = maFonction(2,5);
// Donc ret = 10

//Date
//Conversion d'une date en numérique.
dateNum = Date.parse("01/01/2020 00:00:00");

//Conversion de la dateNum en format date
_objDate = new Date(dateNum);

//Récupérer l'année de _objDate
yy = _objDate.getYear();  //yy
yyyy =_objDate.getFullYear();  //yyyy
ii = _objDate.getMonth()+1;
jj = _objDate.getDate();  //25
hh = _objDate.getHours();  
mm = _objDate.getMinutes();

dateNumSpec = Date.parse(jj+"/"+ii+"/"+yyyy+" "hh+":"+mm+":00")


console.info(dateNumSpec);  //Permet de visualiser la valeur dateNumSpec dans la console (inspecter)
// ou alert();
alert(dateNumSpec);  //Qui affiche un pop à l'écran.

l'objet Date

//L'objet date

_in1 = document.getElementById("in1").value; 
console.info(Date.parse("01/01/2020" + _in1 + ":00"));

function somme(){
    //Déclaration des
    var _in1="";
    var _in2="";
    var _in3="";
    var _in4="";

    //Affectation des variables aux valeurs
    _in1=parseInt(Number(document.getElementById("in1").value)*100)/100;
    _in2=parseInt(Number(document.getElementById("in2").value)*100)/100;
    _in3=parseInt(Number(document.getElementById("in3").value)*100)/100;
    _in4=parseInt(Number(document.getElementById("in4").value)*100)/100;

    var _resultat=parseInt((_in1 + _in2 + _in3 + _in4)*100)/100;

    //Affectation du résultat dans le DOM
    document.getElementById('result').innerHTML=convertion(_resultat);
}

function convertion(_decimal){
    var _h = parseInt(_decimal);               //que les unités Ex: 1.5 = 1
    _dec = parseInt(_decimal*100 - _h*100);    //que les décimales Ex: 1.5 = 50
    _m = parseInt((_dec*60)/100);               //Règle de trois
    if(_h < 10){
        _h= "0"+_h;
    }
    _m = (_m < 10 ? "0" : "") + _m;
    _res = _h+":"+_m;
    return _res;
}