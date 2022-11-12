function checkMonthDays(s) {
	let days = -1;
	// *logica
	switch (s) {
		case "febbraio":
			days = 28;
			break;

		case "novembre":
		case "aprile":
		case "giugno":
		case "settembre":
			days = 30;
			break;

		case "gennaio":
		case "marzo":
		case "maggio":
		case "luglio":
		case "agosto":
		case "ottobre":
		case "dicembre":
			days = 31;
			break;

		default:
			break;
	}
	return days;
}

let form = document.querySelector("#Form1");

form.addEventListener("submit", function (evento) {
	evento.preventDefault();
	let answer = document.querySelector("#inpututente");
	let month = answer.value;
	month = month.toLowerCase();
	let output = document.querySelector("#output");

	days = checkMonthDays(month);

	if (days === -1) {
		output.innerHTML = `Mese non valido`;
		console.log("Mese non valido");
	} else {
		output.innerHTML = `${month} ha ${days} giorni`;
	}
});
