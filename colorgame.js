var colors = generateColors(6); 
//////////////////////
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");
var victoryMessage = document.querySelector("#victory");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#reset");
var selected = document.querySelectorAll(".difficulty");
//var easy = document.querySelector("#easy");
//var hard = document.querySelector("#hard");
var difficulty = "Hard";
colorDisplay.textContent = pickedColor;
//////////////////////

for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var colorPicked = this.style.backgroundColor;
		if (colorPicked === pickedColor){
			victoryMessage.textContent = "Correct!";
			changeColor(colorPicked);
			h1.style.backgroundColor = colorPicked;
		} else{
			this.style.backgroundColor = "#232323";
			victoryMessage.textContent = "Try Again";
		}
	})
}
//////////////////////
newGame.addEventListener("click", function(){
	var numSquare = 0;
	if(difficulty === "Hard"){
	colors = generateColors(6);
	} else{
		colors = generateColors(3);
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];}

})


newGame.addEventListener("mouseover", function(){
	this.classList.add("selected");
})
newGame.addEventListener("mouseout", function(){
	this.classList.remove("selected");
})


//////////////////////
for (var i = 0; i < selected.length; i++){
	////
	selected[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	})
	////
	selected[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	})
	////
	if(selected[i].textContent === "Easy"){
	////
	selected[i].addEventListener("click", function(){
		difficulty = "Easy";
		colors = generateColors(3);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var index = 3; index < squares.length; index++){
			squares[index].style.display = "none";
		}
		for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];}
	})
	////
	} else if (selected[i].textContent === "Hard") {
	////
	selected[i].addEventListener("click", function(){
		difficulty = "Hard";
	 	for(var index = 3; index < squares.length; index++){
			squares[index].style.display = "block";
		}
		colors = generateColors(6);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];}
	})
	////
	}
}
////////////////////////

function changeColor(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
//////////////////////

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//////////////////////

function generateColors(number){
	var colorList = [];
	for(var i = 0; i < number; i++){
	var red = Math.floor(Math.random() * 255 + 1);
	var green = Math.floor(Math.random() * 255 + 1);
	var blue = Math.floor(Math.random() * 255 + 1);
	var rgb = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";
	colorList[i] = rgb;
	}
	return colorList;
}