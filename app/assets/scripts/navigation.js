"strict mode";
const navLink = document.querySelectorAll(".navigation__icons--link");
const navEl = document.getElementById("navigation");
const navIcon = document.querySelector(".nav-icon");
const captionEl = document.querySelectorAll(
  ".navigation__icons--link--figure-caption"
);
const getChromeVersion = function() {
  const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  return raw ? parseInt(raw[2], 10) : false;
};
if (getChromeVersion() <= 49 && getChromeVersion()) {
  console.log(`Old Chrome V ${getChromeVersion()}`);
} else {
  navLink.forEach(el => {
    el.addEventListener("click", () => {
      navEl.classList.toggle("hideMeOnPhone");
      navIcon.classList.remove("clicked");
      hideCaptions();
    });
  });
  navIcon.addEventListener("click", () => {
    navEl.classList.toggle("hideMeOnPhone");
    navIcon.classList.toggle("clicked");
    hideCaptions();
  });
  const hideCaptions = () => {
    captionEl.forEach(el => {
      el.classList.toggle("hideMeOnPhone");
    });
    navLink.forEach(el => {
      el.classList.toggle("hideMeOnPhone");
    });
  };
}
