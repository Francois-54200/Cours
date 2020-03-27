var age, aTrenteAns, estMajeur, estPasCentenaire;
age=parseInt(window.prompt('Age?'));
aTrenteAns=age==30;
estMajeur=age>=18;
estPasCentenaire=age<100;  //on peut écrire aussi:  estPasCentenaire= !=(age>=100)
console.log(age, aTrenteAns, estMajeur, estPasCentenaire);

/*==égalité
>supérieur (strict)
<inférieur (strict)
>= sup ou égale
<=inf ou égale
!= Différence */

if(aTrenteAns)   //if(age==30)
{
    console.log('Vous avez 30 ans');
}

if(estMajeur)
{
    console.log('Vous êtes majeur');
}
else
{
    console.log('Vous êtes mineur');
}

/*if(condition1)
{
}
else if(condition2)
{
}
else
{
}*/

/*en TERNAIRE
texte=(age>=18)?'Majeur':'Mineur'*/