"strict mode";
const darkEl = document.querySelectorAll(".darkMe");
const lightEl = document.querySelectorAll(".lightMe");
const bodyEl = document.getElementsByTagName("BODY")[0];
const getChromeVersion = function() {
  var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  return raw ? parseInt(raw[2], 10) : false;
};
if (localStorage.getItem("isDark") === "noDark" && localStorage.length >= 1) {
  //The .length to fix private mode issues
  darkEl.forEach(el => {
    el.classList.toggle("hideMe");
  });
  lightEl.forEach(el => {
    el.classList.toggle("hideMe");
  });
  bodyEl.classList.toggle("dark");
}
if (getChromeVersion() <= 49 && getChromeVersion()) {
  const oldChromePartial = document.createElement("h2");
  oldChromePartial.innerHTML = `
You are using an old version of Chrome >>> V.${getChromeVersion()} <<< Please Update to a newer version to view a whole new version!!
`;
  document.getElementById("partialChrome").appendChild(oldChromePartial);
} else {
  document
    .querySelector(".navigation__dark-mode")
    .addEventListener("click", () => {
      darkEl.forEach(el => {
        el.classList.toggle("hideMe");
      });
      lightEl.forEach(el => {
        el.classList.toggle("hideMe");
      });
      bodyEl.classList.toggle("dark");
      if (bodyEl.classList.contains("dark")) {
        localStorage.setItem("isDark", "dark");
      } else {
        localStorage.setItem("isDark", "noDark");
      }
    });
}
