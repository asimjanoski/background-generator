var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("but");

// Function default input colors matches the background

setGradient();


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

//function that generates default numbers as a #string

function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

//function that sets # string of random numbers in to the gradient

const setRandomColor = () => {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient()
}

//function that sets # string of random numbers in to the button gradient

const setButton = () => {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	button.style.background = 
	"linear-gradient(to left, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

// Events
// To you use more functions inside eventListener method you got to wrap them in function;
// In order to wrap them you need to assign them to variable

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", () => {
	setRandomColor();
	setButton();
});
