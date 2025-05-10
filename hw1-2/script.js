//여기에 코드를 작성해주세요!

const menu = document.querySelector('.menu');
const click = document.querySelector('.close');
const Open = document.querySelector('.open');


click.addEventListener("click",()=>{
    menu.classList.add('active');
    
    click.style.display="none";
    Open.style.display="inline-block";


});

Open.addEventListener("click",()=>{
    menu.classList.remove('active');
    click.style.display="inline-block";
    Open.style.display="none";
   
});
