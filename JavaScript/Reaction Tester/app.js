const shape = document.querySelector('#shape');
let startTime = new Date().getTime();

shape.addEventListener('click', function() {
    let endTime = new Date().getTime();
    let reactionTime = (endTime - startTime)/1000;
    shape.style.display = 'none';
    document.querySelector('#timeTaken').innerHTML = `${reactionTime} seconds`;
});

setTimeout(function makeShapesAppear() {
    let randomTop = Math.random() * 400;
    shape.style.top = `${randomTop}px`;
    let randomLeft = Math.random() * 400;
    shape.style.left = `${randomLeft}px`;
    shape.style.display = 'block';
    startTime = new Date().getTime();
},Math.random()*2000);

