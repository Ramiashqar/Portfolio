"strict mode";
require("./noframework.waypoints");
const navEl = document.getElementById("navigation");
const homeEl = document.getElementById("home");
const arrowEl = document.querySelectorAll(".down-arrow");

// add Nav destruction
const navDestroy = new Waypoint({
  element: navEl,
  handler: direction => {
    if (direction === "down") {
      navEl.classList.add("navigation-destroy");
    } else {
      navEl.classList.remove("navigation-destroy");
    }
  },
  offset: 17
});
navDestroy;
// remove the down arrow
const arrowVanish = new Waypoint({
  element: homeEl,
  handler: direction => {
    if (direction === "down") {
      arrowEl.forEach(el => {
        el.classList.add("vanish");
      });
    } else {
      arrowEl.forEach(el => {
        el.classList.remove("vanish");
      });
    }
  }
});
arrowVanish;