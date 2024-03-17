const btnMenu = document.querySelector('#btnMenu')

const menuList = document.querySelector('.menuClose')

function verifyMenu() {
    if (menuList.classList[1] == 'menuOpen') {
        closeMenu()
    } else {
        openMenu()
    }
}


function openMenu() {
    menuList.classList.add('menuOpen')
}

function closeMenu() {
    menuList.classList.remove('menuOpen')
}

btnMenu.addEventListener('click', verifyMenu)

