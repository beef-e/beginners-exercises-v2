function fusoORario(ore, fuso) {
	let orario;
	if (ore < 24) {
		orario = ore + fuso;

		if (orario < 0) {
			orario = orario + 24;
		}
		if (orario > 23) {
			orario = orario - 24;
		}

		return orario;
	}
}

let form = document.querySelector("#Form1");

form.addEventListener("submit", function (evento) {
	evento.preventDefault();
	let answer1 = document.querySelector("#inpututente");
	let answer2 = document.querySelector("#inpututente1");
	let orario = answer1.value;
	let minuti = answer2.value;
	orario = parseInt(orario);
	let oreT = fusoORario(orario, 7);
	let oreM = fusoORario(orario, 1);
	let oreN = fusoORario(orario, -6);

	let output = document.querySelector("#output");
	output.innerHTML = `a Tokyo sono le ${oreT}:${minuti}. A Mosca sono le ${oreM}:${minuti}. A New York ${oreN}:${minuti}`;
});
