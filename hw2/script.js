
const input = document.querySelector('.todo-input');
const submitBtn = document.querySelector('.todo-submit-btn');
const todoList = document.querySelector('.todo-items');


submitBtn.addEventListener('click', () => {
  const value = input.value.trim(); 
  if (value !== '') {
    addTodo(value);   
    input.value = ''; 
  }
});


function TodoItem({ text, onComplete }) {
  const item = document.createElement("div");
  item.classList.add("todo-item");

  item.innerHTML = `
    <span class="todo-item-text">${text}</span>
    <button class="delete-btn">삭제</button>
  `;

  
  item.querySelector('.delete-btn').addEventListener('click', () => {
    onComplete(item);
  });

  return item;
}


function addTodo(text) {
  const newItem = TodoItem({
    text,
    onComplete: (item) => item.remove()
  });

  todoList.appendChild(newItem); 
}
