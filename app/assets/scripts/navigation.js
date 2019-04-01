"strict mode";
const navLink = document.querySelectorAll(".navigation__icons--link");
const navEl = document.getElementById("navigation");
const navIcon = document.querySelector(".nav-icon");
const captionEl = document.querySelectorAll(".navigation__icons--link--figure-caption")
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
const hideCaptions= ()=>{
     captionEl.forEach((el)=>{
          el.classList.toggle("hideMeOnPhone");
     })
     navLink.forEach((el)=>{
          el.classList.toggle("hideMeOnPhone");
     })
}