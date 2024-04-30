// EXPLORE MORE BUTTON:

var leadtoindexpage = document.getElementById("leadtoindexpage");

// event listener:

leadtoindexpage.addEventListener("click", function() {
    window.location.href = "home.html";

});


// Linkedin button:

var connectonlinkedin = document.getElementById("connectonlinkedin");

// event listener:

connectonlinkedin.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/siddhi-kamble-618134139/", "_blank")

});

// NAV BAR:
const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hide');
}
);


