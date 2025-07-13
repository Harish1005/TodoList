let mtArr = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < mtArr.length; i++){
    const todoObject = mtArr[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        mtArr.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">Delete</button>
      `;
    todoListHTML += html;
  }

  // console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}




function addTodo(){
  const inputValue = document.querySelector('.text')
  const name = inputValue.value;

  const duedateInput = document.querySelector('.js-duedate');
  const dueDate = duedateInput.value;

  mtArr.push({
    //name : name,
    //dueDate : dueDate
    name,
    dueDate
  });
  inputValue.value = '';
  duedateInput.value = '';

  renderTodoList();
}
//This is my creation
// function deleteTodo() {
//   mtArr.shift();
//   console.log(mtArr);
// }