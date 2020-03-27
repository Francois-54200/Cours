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