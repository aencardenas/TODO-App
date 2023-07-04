const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => { /*=> arrow functions*/
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

//Listener
btn.addEventListener("click", createTask)
