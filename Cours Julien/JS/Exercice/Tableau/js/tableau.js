document.getElementById('fruits').innerHTML

var monTab = ['Pomme', 'Poire', 'Framboise', 'Fraise', 'Kiwi'];

var monHTML = document.getElementById('fruits').innerHTML
for (var i = 0; i < monTab.length; i++) {
    /*var fruit = monTab[i]*/
    //console.log(monTab[i])
    document.getElementById('fruits').innerHTML += "<li>"+monTab[i]+"</li>"
}


    