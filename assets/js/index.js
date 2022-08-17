"use strict";

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
// const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

// navToggleBtn.addEventListener("click", function () {
//   header.classList.toggle("nav-active");
//   this.classList.toggle("active");
// });

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");
let lastClicked;

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    if (lastClicked?.classList.contains("nav-active")) {
      lastClicked.classList.remove("nav-active");
      navbarLinks[i].classList.add("nav-active");
    } else {
      navbarLinks[i].classList.add("nav-active");
    }
    lastClicked = navbarLinks[i];
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const sendEmail = () => {
  const from = document.getElementById("email").value;
  const subject = `Email by: ${document.getElementById("name").value}`;
  const message = document.getElementById("message").value;
  const token = "f964ee3a-47d3-43a1-86a7-81edda1b972a";
  Email.send({
    SecureToken: token,
    To: "nicolaset98@gmail.com",
    From: "nicolaset98@gmail.com",
    Subject: subject,
    Body: from + " " + message,
  }).then((message) => alert(message));
};
