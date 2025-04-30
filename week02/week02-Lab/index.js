let CHECKBOX_IDS = [];
const topCheckBox = document.getElementById("0");

// 중요도 dropdown
const handleDropDown = (event) => {
  event.stopPropagation();

  const priorityBtn = event.target.closest(".priority-btn");
  const options = priorityBtn.querySelector(".priority-options");

  options.classList.toggle("show");
};
//만약 중요도를 선택하게 된다면 원래 select되어있는 중요도 지우고 재할당, drop down 다시 숨겨지게
document.querySelectorAll(".priority-option").forEach((li) => {
  li.addEventListener("click", () => {
    document
      .querySelectorAll(".priority-option")
      .forEach((el) => el.classList.remove("selected"));
    li.classList.add("selected");

    const dropdown = li.closest(".priority-options");
    dropdown.classList.remove("show");
  });
});

//todo 추가하는 핸들러
const addTodo = () => {
  const input = document.querySelector(".todo-input").value.trim();
  const selectedPriority = document.querySelector(".priority-option.selected");
  if (!input || !selectedPriority) {
    alert("할 일과 중요도를 모두 입력하세요!");
    return;
  }

  const priority = selectedPriority.textContent;
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  // 새 항목 추가
  const newTodo = {
    id: Date.now(),
    title: input,
    importance: parseInt(priority),
    completed: false,
  };

  todoList.push(newTodo);
  localStorage.setItem("todoList", JSON.stringify(todoList));

  document.querySelector(".todo-input").value = "";
  selectedPriority.classList.remove("selected");

  renderTodo();
};

//todo render 하는 함수
const renderTodo = (todos) => {
  const todoList = todos || JSON.parse(localStorage.getItem("todoList")) || [];
  const todoTable = document.querySelector(".todo-table");

  const rows = todoTable.querySelectorAll("tr");
  rows.forEach((row, index) => {
    if (index !== 0) row.remove();
  });

  todoList.forEach((todo, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td><input type="checkbox" id="${todo.id}"  class="todo-checkBox" ></td>
        <td>${todo.importance}</td>
        <td>${todo.completed ? "✅ " : "❌"}</td>
        <td>${todo.title}</td>
      `;

    todoTable.appendChild(tr);
    tr.querySelector(".todo-checkBox").addEventListener(
      "click",
      handleCheckBox
    );
  });
  const allCheckboxes = document.querySelectorAll(
    "input.todo-checkBox:not([id='0'])"
  );

  const totalCount = allCheckboxes.length;
  const checkedCount = [...allCheckboxes].filter((cb) => cb.checked).length;
  topCheckBox.checked = totalCount === checkedCount && totalCount > 0;
};
//각 메뉴에 맞게 todo filter 후 render 호출
const filterTodos = (type) => {
  console.log(type);
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  let filter = [];
  switch (type) {
    case "전체":
      filter = todoList;
      break;
    case "완료":
      filter = todoList.filter((todo) => todo.completed);
      break;
    case "미완료":
      filter = todoList.filter((todo) => !todo.completed);
      break;
    case "중요도-1":
    case "중요도-2":
    case "중요도-3":
      const level = parseInt(type.split("-")[1]);
      filter = todoList.filter((todo) => todo.importance == level);
      break;
  }

  renderTodo(filter);
};
//체크박스 핸들러
const handleCheckBox = (event) => {
  const checkboxId = parseInt(event.target.getAttribute("id"));
  const isChecked = event.target.checked;

  const allCheckboxes = document.querySelectorAll(
    "input.todo-checkBox:not([id='0'])"
  );

  if (checkboxId === 0) {
    document.querySelectorAll(".todo-checkBox").forEach((cb) => {
      cb.checked = isChecked;
    });
    CHECKBOX_IDS = isChecked
      ? [...allCheckboxes].map((cb) => parseInt(cb.id))
      : [];
  } else {
    if (isChecked) {
      if (!CHECKBOX_IDS.includes(checkboxId)) {
        CHECKBOX_IDS.push(checkboxId);
      }
    } else {
      CHECKBOX_IDS = CHECKBOX_IDS.filter((id) => id !== checkboxId);
    }
    const totalCount = allCheckboxes.length;
    const checkedCount = [...allCheckboxes].filter((cb) => cb.checked).length;
    topCheckBox.checked = totalCount === checkedCount;
  }
};

//삭제 버튼 핸들러
const handleDelete = () => {
  if (CHECKBOX_IDS.length <= 0) {
    alert("todo를 선택하세요.");
    return;
  }
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  localStorage.setItem(
    "todoList",
    JSON.stringify(todoList.filter((todo) => !CHECKBOX_IDS.includes(todo.id)))
  );

  CHECKBOX_IDS = [];
  renderTodo();
};
// 완료 버튼 핸들러
const handleComplete = () => {
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  const hasCompleted = todoList.some(
    (todo) => CHECKBOX_IDS.includes(todo.id) && todo.completed
  );

  if (hasCompleted) {
    alert("이미 완료된 todo입니다.");
    return;
  }
  localStorage.setItem(
    "todoList",
    JSON.stringify(
      todoList.map((todo) => {
        if (CHECKBOX_IDS.includes(todo.id)) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    )
  );
  CHECKBOX_IDS = [];
  renderTodo();
};
// 처음 실행될 때 render 해주기
renderTodo();
