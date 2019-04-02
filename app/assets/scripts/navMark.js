// "strict mode";
import ScrollMagic from "scrollmagic";
const navFigure = document.querySelectorAll(".navigation__icons--link--figure");
//Scroll Magic Initiate Controller
const controller = new ScrollMagic.Controller();
//Home
const homeShow = new ScrollMagic.Scene({
  triggerElement: "#home",
  offset: 150
});
homeShow.setClassToggle(navFigure[0], "active");
//About Me
const aboutShow = new ScrollMagic.Scene({
  triggerElement: "#aboutMe",
  offset: 80
});
const homeHide = new ScrollMagic.Scene({
  triggerElement: "#aboutMe",
  offset: 80
});
aboutShow.setClassToggle(navFigure[1], "active");
homeHide.setClassToggle(navFigure[0], "sleep");
// Skills
const skillsShow = new ScrollMagic.Scene({
  triggerElement: "#skills",
  offset: 80
});
const aboutHide = new ScrollMagic.Scene({
  triggerElement: "#skills",
  offset: 80
});
skillsShow.setClassToggle(navFigure[2], "active");
aboutHide.setClassToggle(navFigure[1], "sleep");
//My Work
const workShow = new ScrollMagic.Scene({
  triggerElement: "#myWork",
  offset: 80
});
const skillsHide = new ScrollMagic.Scene({
  triggerElement: "#myWork",
  offset: 80
});
workShow.setClassToggle(navFigure[3], "active");
skillsHide.setClassToggle(navFigure[2], "sleep");
//Contact
const contactShow = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 80
});
const workHide = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 80
});
contactShow.setClassToggle(navFigure[4], "active");
workHide.setClassToggle(navFigure[3], "sleep");
controller.addScene([
  homeShow,
  aboutShow,
  homeHide,
  skillsShow,
  aboutHide,
  workShow,
  skillsHide,
  contactShow,
  workHide
]);