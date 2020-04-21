var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
function listarTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var item = document.createElement("li");
        itemConteudo = document.createTextNode(todo+" ");
        item.appendChild(itemConteudo);
        
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        var pos = todos.indexOf(todo);
        link.setAttribute("onclick", "deleteTodo("+ pos +")");
        
        linkContent = document.createTextNode("Excluir");
        link.appendChild(linkContent);
        item.appendChild(link);
        listElement.appendChild(item);
    }
}
listarTodos();
function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    listarTodos()
    saveToStorage()
}

buttonElement.onclick = function(){
    if(inputElement.value != ''){
        addTodo();
    }
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    listarTodos();
    saveToStorage()
}

function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));

}