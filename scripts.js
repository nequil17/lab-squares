document.addEventListener('DOMContentLoaded', function() {
    
    
    var btn = document.createElement("button");
    var t = document.createTextNode("CLICK ME");
    var counter = 0;
    btn.appendChild(t);                                
    document.body.appendChild(btn);
    btn.style.border='3px solid blue';
    btn.style.backgroundColor='red';

    btn.addEventListener ("click", function() {
        var box = document.createElement('div');
        box.className = 'divBox';
        box.id = (counter++);
        box.style.width = '200px';
        box.style.height = '200px';
        box.style.backgroundColor = 'black';
        box.style.marginBottom = '1em'
        document.body.appendChild(box);

        box.addEventListener('click', function(){
            box.style.backgroundColor = randomColor();
        });

        box.addEventListener ("mouseover", function () {
            box.innerText = (box.id);
        });

        box.addEventListener ("mouseleave", function(){
            box.innerText = '';
        });

        

        box.addEventListener ("dblclick", function() {
            if (box.id % 2 == 0 && box.nextSibling !== null) {
                box.nextSibling.remove();    
            } else if (box.id % 2 == 1 && box.previousSibling !== null) {
                box.previousSibling.remove();
            } else {
                alert('Element does not exist');
            }
        });

    });

    function randomColor() {
        var randomRed = Math.floor(Math.random() * 250);
        var randomGreen = Math.floor(Math.random() * 250);
        var randomBlue = Math.floor(Math.random() * 250);
        var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
        
        return randomColor;
    };
});