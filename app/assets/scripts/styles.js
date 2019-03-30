"strict mode";
require("waypoints/lib/noframework.waypoints.min");
const navEl = document.getElementById("navigation");
const homeEl = document.getElementById("home");
const arrowEl = document.querySelectorAll(".down-error");

// add Nav destruction
const navDestroy = new Waypoint({
  element: navEl,
  handler: direction => {
    if (direction === "down") {
      navEl.classList.add("navigation-destroy");
    } else {
      navEl.classList.remove("navigation-destroy");
    }
  }
});
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
