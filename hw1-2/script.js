

const el1 = document.querySelector('.open');
el1.onclick = function() {
    const menu = document.querySelect('.menu');
    menu.style.display = 'none';
    open.style.display = 'none';
    document.querySelector('.close').style.display = 'inline';
};


const el1 = document.querySelector('.close');
el1.onclick = function() {
    const menu = document.querySelect('.menu');
    menu.style.display = 'block';
    open.style.display = 'block';
    document.querySelector('.open').style.display = 'inline';
};
