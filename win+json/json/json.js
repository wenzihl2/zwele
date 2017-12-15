/**
 * Created by zw on 2017/12/15.
 */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("content").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json/demo.json", true);
xmlhttp.send();