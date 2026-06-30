const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .education-card, .project-card, .achievement-card, .contact-container"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("slide-up");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();