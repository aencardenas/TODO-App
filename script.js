( () => {
    
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => { /*=> arrow functions*/
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li'); //crear una tarea
    task.classList.add("card") //asignarle la clase a la tarea para que tenga los estilos del css
    input.value = ''
    //backticks
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask)
    
    //task.innerHTML  = content;S
    task.appendChild(taskContent)
    task.appendChild(deleteIcon())
    list.appendChild(task);
}

//Listener
btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",completeTask)
    return i;
}

//Inmediately invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

}

const deleteIcon = () =>{
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask)
    return i;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}
})();