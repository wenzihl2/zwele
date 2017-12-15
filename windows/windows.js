/**
 * Created by zw on 2017/12/15.
 */

//…Ë÷√
clickfunction='remove(this)';



var elewindows = document.getElementsByClassName('windows');
for ( let i = 0; i < elewindows.length; i++) {
    eletop = document.createElement('div');
    elequit = document.createElement('button');
    eletop.appendChild(elequit);
    elequit.appendChild(document.createTextNode('X'));

    elewindows[i].insertBefore(eletop, elewindows[i].firstChild);
    elewindows[i].setAttribute('onclick', clickfunction);
    elequit.setAttribute('onclick', 'remove(this.parentNode.parentNode)');
}


function remove(a) {
    a.parentNode.removeChild(a)
}
function full(a)
{
    console.log(a);
    a.classList.add('fullwindows');
}
