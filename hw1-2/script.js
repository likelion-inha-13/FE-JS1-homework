const cl = document.querySelector(".close");
const op = document.querySelector(".open");
const menu = document.querySelector(".menu");

function cl_click(){
  cl.style.display = "none";
  op.style.display = "inline-block";
  menu.style.display = "block";
}

function op_click(){  
  op.style.display = "none";
  cl. style.display = "inline-block";
  menu.style.display = "none";
}