console.log("hello world");

//Step 1: Select an element
let form = document.querySelector("#contact");
let duckForm = document.querySelector("#rubberDuck");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

//Step 2: Write the function
function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form has been submitted!");
	// console.log('form submit');
	input1.value = "";
	input2.value = "";
}

const complimentDuck = () => {
	alert("Quack! You are a beautiful human!");
};

//Step 3: Combine them with event listener
form.addEventListener("submit", handleSubmit);

duckForm.addEventListener("mouseover", complimentDuck);
