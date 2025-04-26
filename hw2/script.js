
//todo-submit-btn을 눌렀을 때 input에 입력된 값이 addTodo 함수에 매개변수로 넘겨주게 해주세요! 
// input 태그 안에 값을 비우는 것도 잊지마세요! 

//Todo item 컴포넌트입니다. 
//할일 한 개를 나타냅니다.
function TodoItem({text,onComplete}){
	const item = document.createElement("div");
    item.classList.add("todo-item");
	
	item.innerHTML = `
        <span class="todo-item-text">${text}</span>
        <button class="delete-btn">삭제</button>
    `;

	// 여기에 삭제 버튼을 클릭시 삭제 함수가 호출되게 해주세요
    const delete_b = item.querySelector('.delete-btn');
    delete_b.addEventListener("click", () => onComplete(item));
	
	return item;
}


//새로운 todo를 추가하는 함수입니다. 
function addTodo(text) {
    const newItem = TodoItem({ text, onComplete: (item) => item.remove() });

    //여기에 새로운 todo(newItem)을 todolist에 추가해보세요!
    document.querySelector(".todo-items").appendChild(newItem);
}


// 파란색 추가 버튼
const addButton = document.querySelector('.todo-submit-btn');
// 사용자가 입력한 인풋
const input = document.querySelector('.todo-input');


addButton.addEventListener("click", function(e) {
    addTodo(input.value); // 클릭했을 때 인풋 텍스트가 addTodo의 인자로
    input.value = "" // 인풋 위에 남아있는 문장 삭제
})

