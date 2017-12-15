/**
 * Created by zw on 2017/12/14.
 */
var eleclickmenu = document.querySelectorAll('.menu');
for (let i = 0; i< eleclickmenu.length; i++) {
    eleclickmenu[i].addEventListener('click', function () {
        document.body.appendChild(document.getElementById(eleclickmenu[i].getAttribute('href')).cloneNode(true));

    })
}
