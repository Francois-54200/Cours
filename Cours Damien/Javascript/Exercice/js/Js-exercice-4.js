var nombre1, opération, nombre2, somme;

nombre1= parseFloat(window.prompt('nombre1 ?'));
opération=window.prompt('Opération?(+,-,*,/)');
nombre2= parseFloat(window.prompt('nombre2 ?'));


if(opération=='+')
{
    somme=nombre1 + nombre2;
}

else if(opération=='-')
{
    somme=nombre1 - nombre2;
}

else if(opération=='*')
{
    somme=nombre1 * nombre2;
}

else if(opération=='/')
{
    if(nombre2==0)
    {
        window.alert('Division par 0 impossible');
    }
    else
    {
    somme=nombre1 / nombre2;
    }
}

if(somme !=undefined)
{
    window.alert(nombre1+''+opération+''+nombre2+'='+somme);
}

