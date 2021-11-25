const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        //remove active classes
        panels.forEach(panel =>{
            panel.classList.remove('active');
        })
        panel.classList.add('active');
    });
});

