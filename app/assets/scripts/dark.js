"strict mode";
const darkEl = document.querySelectorAll(".darkMe");
const lightEl = document.querySelectorAll(".lightMe");
const bodyEl = document.getElementsByTagName("BODY")[0];
if (localStorage.getItem("isDark") === "noDark") {
     darkEl.forEach(el => {
          el.classList.toggle("hideMe");
        });
        lightEl.forEach(el => {
          el.classList.toggle("hideMe");
        });
     bodyEl.classList.toggle("dark");
}
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
