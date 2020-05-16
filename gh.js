function eno(){
    var x =document.getElementById("en").value;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        document.getElementById("de").value=xhr.responseText;
    }
}
xhr.open('GET', 'http://localhost/encrypt/go.php?left='+x);
xhr.send(null);





}




function deco(){

    var y =document.getElementById("de").value;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        document.getElementById("en").value=xhr.responseText;
    }
}
xhr.open('GET', 'http://localhost/encrypt/go.php?right='+y);
xhr.send(null);





}