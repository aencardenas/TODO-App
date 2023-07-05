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
    const content = 
        `<div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML  = content;
    list.appendChild(task);
}

//Listener
btn.addEventListener("click", createTask)
