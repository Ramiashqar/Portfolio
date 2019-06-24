const viewMore = document.querySelector("#viewMore");
const projects = document.querySelector("#myWork");
const secondRow = document.querySelector("#secondRow");
const thirdRow = document.querySelector("#thirdRow");
let i = 0;
viewMore.addEventListener("click", () => {
  if (i === 0) {
    secondRow.classList.add("fadeIn");
    i++;
  } else if (i === 1) {
    thirdRow.classList.add("fadeIn");
    viewMore.textContent = "View Less";
    i++;
  } else if (i === 2) {
    secondRow.classList.remove("fadeIn");
    thirdRow.classList.remove("fadeIn");
    viewMore.textContent = "View More";
    i=0;
  } else {
    return;
  }
});
