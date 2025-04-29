const sliding = document.querySelector('.sliding');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const menu = document.querySelector('.menu');

function OpenClose(){
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        close.style.display = 'inline';
        open.style.display = 'none';
    }
    else {
        menu.classList.add('active');
        close.style.display = 'none';
        open.style.display = 'inline'
    }
}

sliding.addEventListener('click', OpenClose)