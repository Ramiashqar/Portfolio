"strict mode";
import ScrollMagic from "scrollmagic";
const navEl = document.getElementById("navigation");
const arrowEl = document.querySelectorAll(".down-arrow");
const navigationDestruction = document.querySelector(".navigation-destroy");
const vanish = document.querySelector(".vanish");

// Init ScrollMagic Controller
const controller = new ScrollMagic.Controller();

//Nav Destroy
const scene1 = new ScrollMagic.Scene({
  triggerElement: "#home",
  offset: 150
});
//Arrow Vanish
const scene2 = new ScrollMagic.Scene({
  triggerElement: "#home",
  offset: 400
});
scene1.setClassToggle(navEl, "navigation-destroy");
scene2.setClassToggle(arrowEl, "vanish");
controller.addScene([scene1, scene2]);
