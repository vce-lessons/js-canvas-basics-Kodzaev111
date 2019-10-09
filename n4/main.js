// Your code here
let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');


canv.width = window.innerWidth;
canv.height = window.innerHeight;


let a = window.innerWidth/2;
let b = window.innerHeight/2;




document.body.appendChild(canv);



init();

function init (){
loop();   
}


function loop (){
draw();
requestAnimationFrame(loop);

}

function draw (){

    // ctx.clearRect(0,0,canv.width,canv.height);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,255,0)';
    ctx.lineTo(a-(100),b-(100));
    ctx.lineTo(a-(100),b+(100));
    ctx.lineTo(a+(100),b+(100));
    ctx.lineTo(a+(100),b-(100));
    ctx.lineTo(a-(100),b-(100));
    ctx.stroke();
    ctx.fillStyle='red';
    ctx.fill();
    ctx.closePath();

    
}