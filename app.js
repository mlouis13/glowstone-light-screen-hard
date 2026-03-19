const form = document.querySelector("form");
const name = document.querySelector("input");
const lightgrid = document.querySelector("#lights-grid");
const stats = document.querySelector("#stats");
const stats2 = document.querySelector("#stats2");
let zero = 0;
let zero2 = 0;
form.addEventListener("submit", (e) => {
	zero = zero + 1;
	stats2.textContent = zero;
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
			if (isClicked === false) {
				zero = zero - 1;
				stats2.textContent = zero;
			} else {
				zero2 = zero2 - 1;

				stats.textContent = zero2;
			}
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
				zero2 = zero2 + 1;
				zero = zero - 1;
				stats2.textContent = zero;
				stats.textContent = zero2;
			} else {
				card.classList.remove("lighted");
				img.setAttribute("src", "assets/glowstone-off.webp");
				onoff.classList.remove("border-off");
				onoff.classList.add("border-on");
				namee.classList.remove("color-off");
				onoff.textContent = "OFF";
				light.textContent = "Turn ON";
				isClicked = false;
				zero2 = zero2 - 1;
				zero = zero + 1;
				stats2.textContent = zero;
				stats.textContent = zero2;
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
const allOnBtn = document.querySelector("#all-on");
const allOffBtn = document.querySelector("#all-off");

allOnBtn.addEventListener("click", () => {
	document.querySelectorAll(".card").forEach((card) => {
		const light = card.querySelector(".light");
		const img = card.querySelector(".img");
		const onoff = card.querySelector(".onoff");
		const namee = card.querySelector(".name");

		card.classList.add("lighted");
		img.setAttribute("src", "assets/glowstone-on.webp");
		onoff.classList.add("border-off");
		onoff.classList.remove("border-on");
		namee.classList.add("color-off");
		onoff.textContent = "ON";
		light.textContent = "Turn OFF";
		card._isClicked = true;
	});
});

allOffBtn.addEventListener("click", () => {
	document.querySelectorAll(".card").forEach((card) => {
		const light = card.querySelector(".light");
		const img = card.querySelector(".img");
		const onoff = card.querySelector(".onoff");
		const namee = card.querySelector(".name");

		card.classList.remove("lighted");
		img.setAttribute("src", "assets/glowstone-off.webp");
		onoff.classList.remove("border-off");
		onoff.classList.add("border-on");
		namee.classList.remove("color-off");
		onoff.textContent = "OFF";
		light.textContent = "Turn ON";
		card._isClicked = false;
	});
});
