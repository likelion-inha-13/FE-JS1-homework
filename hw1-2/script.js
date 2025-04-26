//여기에 코드를 작성해주세요!

const sliding = document.querySelector('.sliding');
const right_t = document.querySelector('.close');
const bottom_t = document.querySelector('.open');
const menu = document.querySelector('.menu');

sliding.addEventListener("click", function(event) {
    if (event.target.classList.contains('close') || event.target.classList.contains('open')) {

        menu.classList.toggle('active'); // .menu .active 추가
        right_t.classList.toggle('disappear'); // 오른쪽 세모 사라지고 나타나게
        bottom_t.classList.toggle('appear'); // 아래쪽 세모 나타나고 사라지게

    }  
})

