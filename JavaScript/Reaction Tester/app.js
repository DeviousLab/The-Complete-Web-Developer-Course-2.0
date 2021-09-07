const shape = document.querySelector('#shape');
let startTime = new Date().getTime();

shape.addEventListener('click', function() {
    let endTime = new Date().getTime();
    let reactionTime = (endTime - startTime)/1000;
    shape.style.display = 'none';
    document.querySelector('#timeTaken').innerHTML = `${reactionTime} seconds`;
    makeShapesAppear();
});

function makeShapesAppear() {
    shape.style.display = 'block';

    let randomTop = Math.random() * 400;
    shape.style.top = `${randomTop}px`;

    let randomLeft = Math.random() * 400;
    shape.style.left = `${randomLeft}px`;

    let size = (Math.random() * 300)+100;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    shape.style.backgroundColor = randomColor;

    if (Math.random() > 0.5) {
        shape.style.borderRadius = '50%';
    } else {
        shape.style.borderRadius = '0';
    };

    startTime = new Date().getTime();
}

setTimeout(makeShapesAppear, Math.random()*3000);
