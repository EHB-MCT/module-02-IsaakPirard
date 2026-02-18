let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = 300;
let y = 300;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 50;
let speed = 10;
let colorVal = "red";

function setup() {
	//Creating a canvas to draw on, using the existing canvas element.
	createCanvas(600, 600, canvasElement);
	noStroke();
}

function draw() {
	background(220);

	// 3.1 Animate position
	x += speed;
	y += speed;

	// 3.2 Bounce logic: check the edges

	if (x <= size / 2 || x >= 600 - size / 2) {
		speed *= -1;
	} else if (y <= size / 2 || y >= 600 - size / 2) {
		speed *= -1;
	}

	// 3.3 Draw
	fill(colorVal);
	circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let sizeInput = document.querySelector("#size-input");
console.log(sizeInput.value);

let speedInput = document.querySelector("#speed-input");
console.log(speedInput.value);

let colorInput = document.querySelector("#color-input");
console.log(colorInput.value);

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging

sizeInput.addEventListener("input", function () {
	size = Number(sizeInput.value);
});

speedInput.addEventListener("input", function () {
	speed = Number(speedInput.value);
});

colorInput.addEventListener("input", function () {
	colorVal = String(colorInput.value);
});
