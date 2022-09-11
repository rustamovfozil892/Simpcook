const btn = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container')
const exit = document.querySelector('.mcc__form-exit')


btn.addEventListener('click', function(){
    modalContainer.classList.add('active')
})

window.addEventListener('click', (event) => {
    if(event.target == modalContainer) {
        modalContainer.classList.remove('active')
    }
})

document.addEventListener('keyup', (event) => {
    if(event.code === 'Escape'){
        modalContainer.classList.remove('active') 
    }
})

exit.addEventListener('click', () => {
    modalContainer.classList.remove('active')
})