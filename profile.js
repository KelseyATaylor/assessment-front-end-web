// favorite color button

const favColorBtn = () => {
	alert("My favorite color is teal-green!");
};

let favoriteColor = document.getElementById("color");

favoriteColor.addEventListener("click", favColorBtn);

//favorite place button
const favPlaceBtn = () => {
	alert("My favorite Place is up in the mountains. Big Cottonwood Canyon.");
};

let favoritePlace = document.getElementById("place");

favoritePlace.addEventListener("click", favPlaceBtn);

//favorite ritual button
const favRitualBtn = () => {
	alert("My favorite ritual is bedtime with my baby: Bathtime, snuggle up cozy, feed her, and sing songs to sleep.");
};

let favoriteRitual = document.getElementById("ritual");

favoriteRitual.addEventListener("click", favRitualBtn);
