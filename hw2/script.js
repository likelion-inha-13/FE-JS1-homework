
//todo-submit-btn을 눌렀을 때 input에 입력된 값이 addTodo 함수에 매개변수로 넘겨주게 해주세요! 
// input 태그 안에 값을 비우는 것도 잊지마세요! 
// Todo item 컴포넌트입니다.
function TodoItem({ text, onComplete }) {
    const item = document.createElement("div");
    item.classList.add("todo-item");
  
    item.innerHTML = `
      <span class="todo-item-text">${text}</span>
      <button class="delete-btn">삭제</button>
    `;
  
    const deleteBtn = item.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => onComplete(item));
  
    return item;
  }
  
  const todoList = document.querySelector('.todo-items');
  const todoInput = document.querySelector('.todo-input');
  const todoSubmitBtn = document.querySelector('.todo-submit-btn');
  
  // 새로운 todo를 추가하는 함수입니다.
  function addTodo(text) {
    const newItem = TodoItem({
      text,
      onComplete: (item) => item.remove()
    });
  
    todoList.appendChild(newItem);
  }
  
  todoSubmitBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text !== '') {
      addTodo(text);
      todoInput.value = ''; 
    }
  });
  