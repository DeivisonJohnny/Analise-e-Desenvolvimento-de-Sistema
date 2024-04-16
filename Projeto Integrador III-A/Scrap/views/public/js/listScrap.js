const btnMenu = document.querySelector('#btnMenu')
const iconMenu = document.querySelector('#iconMenu')
const menu = document.querySelector('.menu')

function showMenu() {
    if (menu.classList[1] == 'showMenu' || menu.classList.length > 1) {
        menu.classList.remove('showMenu')
        iconMenu.name = 'menu'
    } else {
        menu.classList.add('showMenu')
        iconMenu.name = 'close'
    }
}

btnMenu.addEventListener('click', showMenu)