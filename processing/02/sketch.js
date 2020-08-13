const MAX_COUNTS = 20;
let randomCounts = [];
const shuffle = ([...array]) => {
	let _len = array.length;
	for (let i = _len - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function setup() {
	createCanvas(640, 360);
	background(255);
	let _arr = [];
	for (let i = 0; i < MAX_COUNTS; i++) {
		_arr.push(i / 50);
	}
	randomCounts = shuffle(_arr);
}

function draw() {
	frameRate(30);
	const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
	let index = randRange(0, randomCounts.length - 1);
	randomCounts[index]++;
	stroke(0);
	fill(175);
	let w = width / randomCounts.length;
	let len_rc = randomCounts.length;
	for (let x = 0; x < len_rc; x++) {
		rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
	}
}