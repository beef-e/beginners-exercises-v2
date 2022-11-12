function classVoto(vote) {
	let string;
	if (vote < 6) {
		console.log("Voto insufficiente");
		string = `Voto insufficiente`;
	} else if (vote >= 6 && vote <= 6.9) {
		console.log("Voto sufficiente");
		string = `Voto sufficiente`;
	} else if (vote >= 7 && vote <= 7.9) {
		console.log("Voto discreto");
		string = `Voto discreto`;
	} else {
		console.log("Voto buono");
		string = `Voto buono`;
	}

	return string;
}

let form = document.querySelector("#Form1");

form.addEventListener("submit", function (evento) {
	evento.preventDefault();
	let answer = document.querySelector("#inpututente");
	let vote = answer.value;
	vote = parseFloat(vote);
	let output = document.querySelector("#output");

	voto = classVoto(vote);
	output.innerHTML = `${voto}`;
});
