

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const portfolioLink = document.querySelector(".nav-menu a[href*='#portfolio']");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else if (scrollY + windowHeight === documentHeight && sectionId === "contact") {
      document.querySelector(".nav-menu a[href*='#contact']").classList.add("active-link");
      portfolioLink.classList.remove("active-link");
    } else if (sectionId === "portfolio") {
      portfolioLink.classList.remove("active-link");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 400,
    delay: 200,
//     reset: true
});

sr.reveal('.home-data, .abilities-subtitle', {}); 
sr.reveal('.about-subtitle, .about-text, .abilities-img, .about-container-imgAlt, .about-container-data', {delay: 200}); // delay: 400
sr.reveal('.home-img, .home-social-icon, .about-container-data, .abilities-data, .work-img, .qualification-data, .skills-content, .contact-information', {interval: 100}); // don't mess with .skills-content

