const darkEl = document.querySelectorAll('.darkMe')
const lightEl = document.querySelectorAll('.lightMe')
const bodyEl= document.getElementsByTagName('BODY')[0]
document.querySelector('.navigation__dark-mode').addEventListener('click', ()=>{
     darkEl.forEach((el)=>{
          el.classList.toggle('hideMe')
     })
     lightEl.forEach((el)=>{
          el.classList.toggle('hideMe')
     })
     bodyEl.classList.toggle('dark')
});
