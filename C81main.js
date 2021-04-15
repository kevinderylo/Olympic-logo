canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="blue";
color2="black";
color3="red";
color4="yellow";
color5="green";

//How to draw a circle in a fix it position:
function draw(){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(225, 225, 60, 0, 2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle=color2;
    ctx.lineWidth=4;
    ctx.arc(375, 225, 60, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=color3;
    ctx.lineWidth=4;
    ctx.arc(525, 225, 60, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=color4;
    ctx.lineWidth=4;
    ctx.arc(300, 300, 60, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=color5;
    ctx.lineWidth=4;
    ctx.arc(450, 300, 60, 0, 2*Math.PI);
    ctx.stroke();
}