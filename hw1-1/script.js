const hider = document.getElementById('hider');
const text = document.getElementById('text');

const htmlCollection = text.children;

hider.addEventListener("click",()=>{
    text.style.display = "none"
})
