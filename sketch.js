function setup() {
	createCanvas(800,800);
}

function draw() {
	if (mouseIsPressed) { fill(0);}
	else { fill(225);}
	ellipse(mouseX, mouseY, 50, 50);
}