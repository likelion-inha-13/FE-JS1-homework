//여기에 코드를 작성해주세요!
const openButton = document.getElementsByClassName("open")[0];
const closeButton = document.getElementsByClassName("close")[0];
const menu = document.getElementsByClassName("menu")[0];

closeButton.addEventListener("click", function(){
    menu.classList.add("active");
    openButton.style.display = "inline";
    closeButton.style.display = "none";
});

openButton.addEventListener("click", function(){
    menu.classList.remove("active");
    openButton.style.display = "none";
    closeButton.style.display = "inline";
});