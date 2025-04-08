//여기에 코드를 작성해주세요!

const menu = document.querySelector('.menu');
const click = document.querySelector('.close');
const Open = document.querySelector('.open');


//const textNodeR = click.firstChild; //텍스트노드이다
//const textNodeU = Open.firstChild;

click.addEventListener("click",()=>{
    menu.classList.add('active');
    //textNodeR.nodeValue = textNodeU.nodeValue;
    //textNodeR.nodeValue = 
    click.style.display="none";
    Open.style.display="inline-block";


});

Open.addEventListener("click",()=>{
    menu.classList.remove('active');
    click.style.display="inline-block";
    Open.style.display="none";
    //textNodeU.nodeValue = textNodeR.nodeValue;
});
