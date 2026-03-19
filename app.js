const form = document.querySelector("form");
const name = document.querySelector("input");
const lightgrid = document.querySelector("#lights-grid");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	createRoom();
});
function createRoom() {
	if (name.value.length >= 3) {
		let isClicked = false;
		const card = document.createElement("div");
		const img = document.createElement("img");
		const namee = document.createElement("h2");
		const onoff = document.createElement("p");
		const light = document.createElement("button");
		const close = document.createElement("button");

		namee.classList.add("name");
		img.classList.add("img");
		card.classList.add("card");
		light.classList.add("light");
		close.classList.add("close");
		onoff.classList.add("onoff");
		close.classList.add("close");

		img.setAttribute("src", "assets/glowstone-off.webp");
		namee.textContent = name.value;
		name.value = "";
		onoff.textContent = "OFF";
		light.textContent = "Turn ON";
		close.textContent = "close";

		close.addEventListener("click", () => {
			card.remove();
		});

		light.addEventListener("click", () => {
			if (isClicked === false) {
				card.classList.add("lighted");
				img.setAttribute("src", "assets/glowstone-on.webp");
				onoff.classList.add("border-off");
				onoff.classList.remove("border-on");
				namee.classList.add("color-off");
				onoff.textContent = "ON";
				light.textContent = "Turn OFF";
				isClicked = true;
			} else {
				card.classList.remove("lighted");
				img.setAttribute("src", "assets/glowstone-off.webp");
				onoff.classList.remove("border-off");
				onoff.classList.add("border-on");
				namee.classList.remove("color-off");
				onoff.textContent = "OFF";
				light.textContent = "Turn ON";
				isClicked = false;
			}
		});

		card.appendChild(img);
		card.appendChild(namee);
		card.appendChild(onoff);
		card.appendChild(light);
		card.appendChild(close);
		lightgrid.appendChild(card);

		return card;
	} else {
		console.log("3 caractere min");
	}
}
