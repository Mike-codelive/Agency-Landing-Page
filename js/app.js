
window.onload = () => {
	const loader = document.querySelector(".loader");
	setTimeout(() => {
		loader.className += " hidden";
	}, 3000);
}

/* select button and links
-------------------------------------------------------------- */
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});
/* smooth scroll
-------------------------------------------------------------- */
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
	link.addEventListener("click", e => {

		e.preventDefault();
		links.classList.remove("show-links");
		const attribute = e.target.getAttribute("href")
		let id,position


		if (attribute === null) {
			if (e.target.parentNode.getAttribute("href") === null) {
				id = e.target.ChildNode.parentNode.getAttribute("href").slice(1)
			} else {
				id = e.target.parentNode.getAttribute("href").slice(1);
			}
		} else {
			id = attribute.slice(1)
		}

		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: "smooth"
		});

	});
});

// window.addEventListener('resize', e => {
// 	console.log(e.target.screen.height)
// 	if (e.target.screen.width > 1366) {
// 		navLinks.classList.remove("show-links");
// 	}
// })

// console.log(self.innerWidth ,self.innerHeight,"browser screen res" )
