const todoList = document.querySelector('.todo-items');
const submitButton = document.querySelector('.todo-submit-btn');
const input = document.querySelector('.todo-input');
// querySelector을 이용하여 필요한 html의 요소들에 하나씩 접근함.
// 앞선 과제에서와 동일하게, getElementById 같은 접근 방법을 사용하면
// 하나씩 접근하는 것이 아닌, 쉽게 말해 덩어리에 접근하게 되는 것이므로
// 코드가 제대로 돌아가지 않음 (추가적인 코드 입력이 필요한 것 같다.) 
// 따라서 하나의 요소에 접근하는 querySelector을 사용함.


//Todo item 컴포넌트입니다. 
function TodoItem({text, onComplete}){
	const item = document.createElement("div");
    item.classList.add("todo-item");
	
	item.innerHTML = `
        <span class="todo-item-text">${text}</span>
        <button class="delete-btn">삭제</button>
    `;
    // TodoItem 함수는 새로운 div를 생성함.
    // 여기에 'todo-item'이라는 class를 추가함함.
    // 새롭게 만들어진 div 안에 텍스트와 삭제 버튼을 추가함.
	
	const deleteButton = item.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        onComplete(item);
    })
    // 삭제 버튼의 경우 item 안에서의 '.delete-btn' 에 접근하도록 함.
    // 삭제 버튼을 누르게 되면, onComplete 함수가 호출되게 됨.
	
	return item;
}


//새로운 todo를 추가하는 함수입니다. 
function addTodo(text) {
    const newItem = TodoItem({ text, onComplete: (item) => item.remove() });
    todoList.appendChild(newItem);
}
// 여기서 appendChild : 부모 노드에 자식 노드를 추가하는 것.
// 따라서, todolist라는 부모 노드에 newItem을 추가하게 되는 것.
// onComplete 함수 (콜백함수) 는 item을 삭제하는 역할을 함. 
// 사용자가 삭제 버튼을 누르게 되면, onComplete함수가 호출되어 item을 삭제함.


//입력 버튼 클릭 시 발생하는 이벤트 코드입니다.
submitButton.addEventListener('click', () => {
    const text = input.value; // text에 input 의 값을 가져온다.

    if (text !== ''){ // 만약 text가 공백이 아니라면,
        addTodo(text); // todo에 text를 추가함.
        input.value = ''; // 그리고 input의 값을 비움.
    }

})