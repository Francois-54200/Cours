window.onload=function(){

var SALUT
let test=2;
SALUT="Bonjour tout le monde !"

for(let i=0;i<10;i++)
{

    console.log(SALUT+test)
    test++;
}

let elem=document.getElementById("test");
elem.onclick=coucou;

function coucou()
{
    alert("Coucou");
}

};