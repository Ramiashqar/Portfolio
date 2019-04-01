"strict mode";
require("./noframework.waypoints");
const homeEl = document.getElementById("home");
const aboutEl = document.getElementById("aboutMe");
const skillsEl = document.getElementById("skills");
const workEl = document.getElementById("myWork");
const contactEl = document.getElementById("contact");
const navFigure = document.querySelectorAll(".navigation__icons--link--figure");

const markHome = new Waypoint({
  element: homeEl,
  handler: () => {
    navFigure[0].classList.toggle("active");
  },
  offset: "10%"
});
const markAbout = new Waypoint({
  element: aboutEl,
  handler: () => {
    navFigure[0].classList.toggle("active");
    navFigure[1].classList.toggle("active");
  },
  offset: "10%"
});
const markSkills = new Waypoint({
  element: skillsEl,
  handler: () => {
    navFigure[1].classList.toggle("active");
    navFigure[2].classList.toggle("active");
  },
  offset: "10%"
});
const markWork = new Waypoint({
  element: workEl,
  handler: () => {
    navFigure[2].classList.toggle("active");
    navFigure[3].classList.toggle("active");
  },
  offset: "10%"
});
const markContact = new Waypoint({
  element: contactEl,
  handler: () => {
    navFigure[3].classList.toggle("active");
    navFigure[4].classList.toggle("active");
  },
  offset: "30%"
});
