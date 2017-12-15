/**
 * Created by zw on 2017/12/15.
 */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for (let i = 0; i < myObj.pets.length; i++) {
            console.log(i);
creattext(myObj.pets[i].name)
        }

    }
}
xmlhttp.open("GET", "json/demo.json", true);
xmlhttp.send();

function creattext(a){
    elewindows = document.createElement('div');
    elewindows.setAttribute('class','windows');
    eletop = document.createElement('div');
    elequit = document.createElement('button');
    eletop.appendChild(elequit);
    document.body.appendChild(elewindows);
    elequit.appendChild(document.createTextNode(a));

    elewindows.insertBefore(eletop, elewindows.firstChild);
    elewindows.setAttribute('onclick', 'remove(this)');
}
function remove(a) {
    a.parentNode.removeChild(a);
}
