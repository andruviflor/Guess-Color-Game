var numSquares = 6;
var colors = [];
var colorPicked;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn= document.querySelector("#easybtn");
var hardbtn= document.querySelector("#hardbtn");
var modeButtons= document.querySelectorAll(".mode");

init ();

function init(){
	setupModeButtons ();
	setupSquares ();
	reset();

}

$('.popover-dismiss').popover({
  trigger: 'focus'
})

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//how many squares to show
			if(this.textContent === "EASY"){
			numSquares = 3;
			} else {
			numSquares = 6;
			}	
			//change colors
			reset();
		})
	}
}

function setupSquares(){
	for (var i = 0 ; i < squares.length ; i++){
		squares[i].addEventListener("click", function(){
			//Take color from the clicked square
			var colorClicked = this.style.background;
			//Compare the color to Clicked color
			if(colorClicked === colorPicked){
			messageDisplay.textContent = "You got it!";
			resetButton.textContent = "Play again!";
			changeColors(colorClicked);
			h1.style.background = colorPicked;
			} else {
			this.style.background = "white";
			messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	//Generate new colors
	colors = generateRandomColors(numSquares);
	//Pick one random color from array
	colorPicked = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = colorPicked;
	resetButton.textContent = "New colors";
	//Change the colors in the squares
	for (var i = 0 ; i < squares.length ; i++){
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	//Add initial colors to the squares
	squares[i].style.background = colors[i];
	}
	h1.style.background = "#d9d9d9";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//Loop colors in all squares
	for(var i = 0; i < squares.length; i++){
	//Change each color to match given color
		squares[i].style.background =color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
 	//make an array
 	var arr = [];
 	//Repeat num times
 	for(var i = 0; i < num; i++){
 	//Get random color
 	arr.push(randomColor());
 	}
 	//Retunr that array
 	return arr;
}

function randomColor() {
	//Pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//Pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//Pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


