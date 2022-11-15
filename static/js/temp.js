function calcolaGradi(input) {
	let tempC = (input - 32) / 1.8;
	return tempC;
}

let form = document.querySelector("#Form1");

form.addEventListener("submit", function (evento) {
	evento.preventDefault();
	let answer = document.querySelector("#inpututente");
	let tempF = answer.value;
	tempF = parseFloat(tempF);
	let output = document.querySelector("#output");

	temp = calcolaGradi(tempF);
	output.innerHTML = `${temp}°C`;
});
