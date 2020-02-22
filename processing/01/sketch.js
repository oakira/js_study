let x;
let y;
let w;
function setup() {
	createCanvas(640, 360);
	background(255);
	w = new Walker();
}
function draw() {
	frameRate(30);
	w.step();
	w.display();
}
class Walker {
	constructor() {
		this.Walker();
	}
	Walker() {
		x = width / 2;
		y = height / 2;
	}
	display() {
		stroke(0);
		point(x, y);
	}
	step() {
		const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
		let stepx = randRange(-1, 1);
		let stepy = randRange(-1, 1);
		x += stepx;
		y += stepy;
	}
}