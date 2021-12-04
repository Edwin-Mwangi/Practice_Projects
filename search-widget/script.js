const searchBtn = document.querySelector('.Btn');
const unhideInput = document.querySelector('.search');
const input = document.querySelector('input');

searchBtn.addEventListener('click', ()=>{
    unhideInput.classList.toggle('active');
    input.focus();
})