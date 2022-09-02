//Step 1: Select Element
let favoriteColor = document.getElementById("color");
let favoritePlace = document.getElementById("place");
let favoriteRitual = document.getElementById("ritual");
let movieForm = document.querySelector("form");

//Step 2: Write Functions
const favColorBtn = () => {
	alert("My favorite color is teal-green!");
};

const favPlaceBtn = () => {
	alert("My favorite Place is up in the mountains. Big Cottonwood Canyon.");
};

const favRitualBtn = () => {
	alert("My favorite ritual is bedtime with my baby: Bathtime, snuggle up cozy, feed her, and sing songs to sleep.");
};

const submitForm = (event) => {
	event.preventDefault();

	alert("Incorrect! They are ALL the best LOTR movie.");
};

//Step 3: Combine 1 & 2 with Event Listener
favoriteColor.addEventListener("click", favColorBtn);

favoritePlace.addEventListener("click", favPlaceBtn);

favoriteRitual.addEventListener("click", favRitualBtn);
movieForm.addEventListener("submit", submitForm);
