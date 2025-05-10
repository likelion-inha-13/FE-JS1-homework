//여기에 코드를 작성해주세요!
const text = document.getElementById('text')
const idElement = document.getElementById('hider');
idElement.addEventListener("click",()=>{
    text.remove();
});