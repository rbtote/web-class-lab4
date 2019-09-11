function newTODO() {
	let textInput = document.getElementById('newTodoText');
	var ul = document.getElementById("list");
  	var li = document.createElement("li");
  	p = document.createElement("p");
  	var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "todoItem";
    if(textInput.value != '' && textInput.value.trim().length != 0){
	    li.appendChild(checkbox);
	  	li.appendChild(p);
	  	p.appendChild(document.createTextNode(textInput.value));
	  	ul.appendChild(li);
	  	textInput.value = "";
    }
}

function markTODO() {
	let todos = document.getElementsByName("todoItem");
	for(var x = 0; x < todos.length; x++){
        if(!todos[x].checked){
            todos[x].click();
        }
    }
}

function clearTODO() {
	let todos = document.getElementsByName("todoItem");
	for(var x = 0; x < todos.length; x++){
        if(todos[x].checked){
            todos[x].click();
        }
    }
}

function deleteTODO() {
	var ul = document.getElementById("list");
	ul.innerHTML = '';
}