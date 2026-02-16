function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please fill this field");
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = task;
  // span.onclick(() =>{
  //     span.classList.toggle('completed')
  // })

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = () => {
    editTask(span, editBtn);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn)

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";

  function editTask(span, editBtn) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.innerText;

    const li = span.parentElement;
    li.replaceChild(input, span);

    editBtn.innerText = "Save";

    editBtn.onclick = () => {
      span.innerText = input.value.trim() || span.innerText;
      li.replaceChild(span, input);
      editBtn.innerText = "Edit";
      editBtn.onclick = () => editTask(span, editBtn);
    };
  }
}
