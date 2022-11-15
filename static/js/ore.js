function CalcolaMilli(ore, minuti) {
	minuti = minuti + ore * 60;
	minuti = minuti * 60000;
	let millisecondi = minuti;
	return millisecondi;
}

let form = document.querySelector("#Form1");

form.addEventListener("submit", function (evento) {
	evento.preventDefault();
	let answ1 = document.querySelector("#inpututente");
	let answ2 = document.querySelector("#inpututente1");

	let h = answ1.value;
	let m = answ2.value;

	mseconds = CalcolaMilli(h, m);
	let output = document.querySelector("#output");
	output.innerHTML = `${h} ore e ${m} minuti equivalgono a ${mseconds} millisecondi`;
});
