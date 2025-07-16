let mtArr = JSON.parse(localStorage.getItem('mtArr')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < mtArr.length; i++){
    const todoObject = mtArr[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        deleteList(${i})
      " class="delete-button">Delete</button>
      `;
    todoListHTML += html;
  }

  function deleteList(index){
    mtArr.splice(index, 1);
    localStorage.setItem('mtArr', JSON.stringify(mtArr));
    renderTodoList();
  } 

  

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}




function addTodo(){
  const inputValue = document.querySelector('.text')
  const name = inputValue.value;

  const duedateInput = document.querySelector('.js-duedate');
  const dueDate = duedateInput.value;

  if (name === '' || dueDate === ''){
    alert('Please fill the data');
    return;
  }
  
  mtArr.push({
    name,
    dueDate
  });
  inputValue.value = '';
  duedateInput.value = '';

  localStorage.setItem('mtArr', JSON.stringify(mtArr));
  renderTodoList();
}
