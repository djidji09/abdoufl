// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


// burger menu
const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener("click", () => {
    navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
})
