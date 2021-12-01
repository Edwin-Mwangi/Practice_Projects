const open = document.getElementById('open');
const close = document.getElementById('close');

const rotatingContainer = document.querySelector('.container');

open.addEventListener('click',() =>{
    rotatingContainer.classList.add('show-nav');

})

close.addEventListener('click',() =>{
    rotatingContainer.classList.remove('show-nav');

})