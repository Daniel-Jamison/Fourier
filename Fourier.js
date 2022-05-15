var layer1;
var layer2;
var ctx1;
var ctx2;

var width = Math.floor(window.innerWidth);
var height = Math.floor(window.innerHeight);

var xfo
var yfo
var x = width*.5;
var y = height*.5;

var Time = 0

const randm = [Math.floor(Math.random() * 90)]
const randf = [Math.floor(Math.random() * 50)]

var n = [Math.floor(1+Math.random() * 6)]

function init() 
{
	layer1 = document.getElementById("layer1");
	ctx1 = layer1.getContext("2d");
	layer1.width = width-4;
	layer1.height = height-4;
		
	layer2 = document.getElementById("layer2");
	ctx2 = layer2.getContext("2d");
	layer2.width = width-4;
	layer2.height = height-4;

	setInterval(drawAll, 10);
}

function drawAll() 
{
	Lines()
}
function Lines()
{	
	for (let r = 0; r < n; r++)
	{
		randm.push([Math.floor(Math.random() * 100)])
		randf.push([Math.floor(Math.random() * 50)])
	}
	
	ctx1.clearRect(0, 0, width, height);
	
	ctx1.strokeStyle = "black";

	
	ctx2.strokeStyle = "grey";
	
	x = width*.5;
	y = height*.5;
	
	for (let i = 0; i < n; i++)
	{	
		xn = (x)+(randm[i]*Math.sin(Time/(40*(i+1))))
		yn = (y)+(randm[i]*Math.cos(Time/(40*(i+1))))
		
		ctx1.lineWidth = 2;
		ctx1.beginPath();
		ctx1.moveTo(x, y);
		ctx1.lineTo(xn, yn);
		ctx1.stroke();
		
		ctx1.lineWidth = .1;
		ctx1.beginPath();
		ctx1.arc(x, y, randm[i], 0, 2 * Math.PI);
		ctx1.stroke();
		
		
		 
		x = xn
		y = yn
	}
	
	ctx2.beginPath();
	ctx2.moveTo(x, y);
	ctx2.lineTo(xfo, yfo);
	ctx2.stroke();

	yfo = y
	xfo = x
	
	Time = Time + 1		
}

init();