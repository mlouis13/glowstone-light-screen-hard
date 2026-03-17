const form = document.querySelector("form");
const name = document.querySelector("input");
const lightgrid = document.querySelector("#lights-grid");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const card = document.createElement("div");
	const img = document.createElement("img");
	const namee = document.createElement("h2");
	const onoff = document.createElement("p");
	const light = document.createElement("button");
	const close = document.createElement("button");
	img.setAttribute("src", "assets/glowstone-off.webp");
	namee.textContent = name.value;
	card.appendChild(namee);
	card.appendChild(img);
	lightgrid.appendChild(card);
});
