document.addEventListener("DOMContentLoaded", function() {

var btn = document.createElement("BUTTON");        
var t = document.createTextNode("CLICK ME");       
btn.appendChild(t);                                
document.body.appendChild(btn);
btn.style.border='3px solid blue';
btn.style.backgroundcolor='red';

btn.addEventListener('click', function() {
    var box = document.createElement('div');
    box.className = 'divBox';
    box.style.width='300px';
    box.style.height='300px';
    box.style.backgroundColor='black';
    box.style.marginBottom='1em'
    document.body.appendChild(box);
});
btn.addEventListener('dblclick', function(){

});
});