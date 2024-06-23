const  myListul = document.getElementById("listoftodo");
let myTodolist = [];
let index = 1;

function createTodo (){
    const createList = document.querySelector(".form-create");
    createList.addEventListener("submit", function (e) {
        e.preventDefault();
    const listContent = this[0].value;
    if (!listContent) return;
    const dataOflist =`
     <li
     data-edit=${index}
      class="grocery-todo">
                <span>${listContent}</span>
                <ion-icon data-del=${index} class="trash" name="trash-sharp"></ion-icon>
            </li>`;
   myListul.insertAdjacentHTML("afterbegin", dataOflist);
    myTodolist.push({id: index++, content: listContent });
    this[0].value = "";
    localStorage.setItem("todolist", JSON.stringify(myTodolist));
    console.log(myTodolist);
    })
}
function localstorage(){
    const fixTodolist = localStorage.getItem("todolist");
    if (!fixTodolist) return;
    myTodolist = JSON.parse(fixTodolist);
    readTodo();
    console.log(myTodolist);

}
 function readTodo(){
   myListul.innerHTML = "";
   let  dataOflist = "";
   myTodolist.forEach((todo) => {
    dataOflist += ` <li
     data-edit=${todo.id}
      class="grocery-todo">
                <span>${todo.content}</span>
                <ion-icon data-del=${todo.id} class="trash" name="trash-sharp"></ion-icon>
            </li>`
   })
  myListul.insertAdjacentHTML("afterbegin", dataOflist);

 }
 function editTodo(){
    const editInput = document.querySelector(".edit-input");
    const formEdit = document.querySelector(".form-edit");
    let findTodo = [];
    myListul.addEventListener("click", function(e){
       let dataOflist = e.target.closest(".grocery-todo");
       if (!dataOflist) return;
       const todoNumber = dataOflist.dataset.edit;
       console.log(myTodolist);
      findTodo = myTodolist.filter((todo) => todo.id === +todoNumber) ;
      editInput.value = findTodo[0].content;
    })
    formEdit.addEventListener("submit", function(e){
        e.preventDefault();
        const editedValue = this[0].value;
        findTodo[0].content = editedValue;
        const editedIndexTodo = myTodolist.findIndex((todo) => todo.id === findTodo[0].id);
       myTodolist[editedIndexTodo] = findTodo[0];
        this[0].value = "";
        readTodo();
    });

 }
 function deleteTodo() { 
    myListul.addEventListener("click", function (e) {
      const todo = e.target.closest(".trash");
      if (!todo) return;
      const todoId = todo.dataset.del;
      console.log(todo, todoId)
      const delTodoIndex = myTodolist.findIndex((todo) => todo.id === +todoId);
     myTodolist.splice(delTodoIndex, 1);
      localStorage.setItem("todolist", JSON.stringify(myTodolist));
      readTodo();
      console.log(myTodolist);
    });
  }
(function init() {
   createTodo();
   localstorage();
   editTodo();
   deleteTodo();
  })();