var text = document.getElementsByTagName('h1');
var container = document.getElementsByClassName('container');

container.onmouseover = function() {
    text.style.visibility="visible";
    container.style.background="#000000";
    container.style.opacity="50%";
}
