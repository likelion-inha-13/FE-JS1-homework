//todo-submit-btn을 눌렀을 때 input에 입력된 값이 addTodo 함수에 매개변수로 넘겨주게 해주세요! 
// input 태그 안에 값을 비우는 것도 잊지마세요! 

const addbtn = document.querySelector('.todo-submit-btn');//추가버튼
const todoInput = document.querySelector('.todo-input');

addbtn.addEventListener('click', ()=>{
    const todoText = todoInput.value;  //입력받은값을 투두텍스트에 넣고 
    if (todoText !== '') {//비어있는값이 아니면
        addTodo(todoText); //addtodo함수에 이 값을 넣음
        todoInput.value = '';//그 입력박스를 비어줌
    }

});

//Todo item 컴포넌트입니다. 
function TodoItem({text,onComplete}){
	const item = document.createElement("div");
    item.classList.add("todo-item");
	
	item.innerHTML = `
        <span class="todo-item-text">${text}</span>
        <button class="delete-btn">삭제</button>  
        `
    //삭제버튼 클래스
    ;
	
	// 여기에 삭제 버튼을 클릭시 삭제 함수가 호출되게 해주세요 
    const delbtn = item.querySelector('.delete-btn'); // 삭제버튼
    delbtn.addEventListener('click', ()=> {//삭제버튼 누를시
        onComplete(item); //밑에 함수있음 호출
    });
	return item;
}

const todoList = document.querySelector('.todo-items'); //표시될 투두리스트

//새로운 todo를 추가하는 함수입니다. 
function addTodo(text) {
    const newItem = TodoItem({ text, onComplete: (item) => item.remove() });
    
    //여기에 새로운 todo(newItem)을 todolist에 추가해보세요!
    todoList.appendChild(newItem);


}
