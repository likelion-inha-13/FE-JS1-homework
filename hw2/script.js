//todo-submit-btn을 눌렀을 때input에 입력된 값이 addTodo 함수에 매개변수로 넘겨주게 해주세요! 
// input 태그 안에 값을 비우는 것도 잊지마세요! 

//Todo item 컴포넌트입니다. 
function TodoItem({text,onComplete}){
	const item = document.createElement("div");
    item.classList.add("todo-item");
	
	item.innerHTML = `
        <span class="todo-item-text">${text}</span>
        <button class="delete-btn">삭제</button>
    `;
	
	// 여기에 삭제 버튼을 클릭시 삭제 함수가 호출되게 해주세요 
	const del = item.querySelector(".delete-btn");
    del.addEventListener("click",()=>{onComplete(item);})

	return item;
}

const todoList = document.querySelector('.todo-items');

//새로운 todo를 추가하는 함수입니다. 
function addTodo(text) {
    const newItem = TodoItem({ text, onComplete: (item) => item.remove() });
    todoList.appendChild(newItem);
    //여기에 새로운 todo(newItem)을 todolist에 추가해보세요!
}

const input = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-submit-btn");
submitBtn.addEventListener("click",()=>{
    const txt = input.value.trim();
    if(txt!==""){
        addTodo(txt);
        input.value="";
    }
});