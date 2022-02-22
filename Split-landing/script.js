const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () =>{
    container.classList.add('hover-left')
    container.classList.add('hover-top')

})
left.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-left')
    container.classList.remove('hover-top')
})

right.addEventListener('mouseenter', () =>{
    container.classList.add('hover-right')
    container.classList.add('hover-bottom')
})

right.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-right')
    container.classList.remove('hover-bottom')
})