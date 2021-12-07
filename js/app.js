let elem = document.getElementById("my-title");

let myColors = ["red", "green", "orange", "yellow", "blue"];
let myOtherColors = ["red", "green", "orange", "yellow", "blue"];

const changeColor = () => {
	let val = Math.floor(Math.random() * myColors.length);
	let otherVal = Math.floor(Math.random() * myColors.length);
	console.log(val);
	elem.style.backgroundColor = myColors[val];
	elem.style.color = myOtherColors[otherVal];
};
