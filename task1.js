
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("#navbar ul");
const back = document.querySelector(".back");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    
   
});




document.querySelectorAll("#navbar a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const moreInfoBtns = document.querySelectorAll(".more-info-btn");

    moreInfoBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const projectInfo = this.nextElementSibling;
            if (projectInfo.style.display === "none" || projectInfo.style.display === "") {
                projectInfo.style.display = "block";
                this.textContent = "Less Info";
            } else {
                projectInfo.style.display = "none";
                this.textContent = "More Info";
            }
        });
    });
});
window.addEventListener("scroll", () => {
    const words = document.querySelectorAll(".animate-on-scroll");
    const windowHeight = window.innerHeight;

    words.forEach(word => {
        const position = word.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            word.style.transform = "translateX(0)";
            word.style.opacity = "1";
        } else {
            word.style.transform = "translateX(-100px)";
            word.style.opacity = "0";
        }
    });
});
