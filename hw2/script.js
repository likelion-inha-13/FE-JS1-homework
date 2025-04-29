const input = document.querySelector('.todo-input');
const todolist = document.querySelector('.todo-items')
const submit_btn = document.querySelector('.todo-submit-btn');

//todo-submit-btn을 눌렀을 때 input에 입력된 값이 addTodo 함수에 매개변수로 넘겨주게 해주세요! 
// input 태그 안에 값을 비우는 것도 잊지마세요! 

//Todo item 컴포넌트입니다. 
function TodoItem({text,onComplete}){
	const item = document.createElement("div"); //각각의 item에 연결된 delete 버튼을 다루기 위해 item 사용
    item.classList.add("todo-item");
	
	item.innerHTML = `
        <span class="todo-item-text">${text}</span>
        <button class="delete-btn">삭제</button>
    `;
	
	// 여기에 삭제 버튼을 클릭시 삭제 함수가 호출되게 해주세요 
	const delete_btn = item.querySelector('.delete-btn'); //
    delete_btn.addEventListener('click',()=> {
        onComplete(item); //onComplete 콜백함수를 실행하여 각각의 요소를 삭제
    })
	return item;
}

const todoList = document.querySelector('.todo-items');

//새로운 todo를 추가하는 함수입니다. 
function addTodo(text) {
    const newItem = TodoItem({ text, onComplete: (item) => item.remove() });
    todolist.append(newItem); //목록에 추가
    //여기에 새로운 todo(newItem)을 todolist에 추가해보세요!
}

submit_btn.addEventListener('click',() => {
    const input_todo = input.value; //사용자가 입력한 값
    addTodo(input_todo); //입력된 텍스트를 todo 항목에 추가
    input.value = null; // 텍스트가 비어있게 지정하였다. (입력창 초기화화)
});