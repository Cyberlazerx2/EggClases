document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton')
  const taskList = document.getElementById('taskList')

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;

      newTask.addEventListener("click", function () {
        newTask.classList.toggle("completed");
      });

      newTask.addEventListener("dblclick", function () {
        //remover elemento de taskList
        taskList.removeChild(newTask)
      });
        //agregar elemento de taskList
        taskList.appendChild(newTask);

        //establecer el valor del input como vacio
        taskInput.value = '';
    
    }
  });
});
