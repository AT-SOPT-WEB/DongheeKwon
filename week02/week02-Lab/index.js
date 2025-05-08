let CHECKBOX_IDS = [];
const topCheckBox = document.getElementById("0");
// 메뉴 필터 버튼들 바인딩
document.querySelectorAll(".menu-item[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filterType = button.getAttribute("data-filter");
    filterTodos(filterType);
  });
});

// 중요도 드롭다운 토글
document.querySelectorAll(".priority-img").forEach((img) => {
  img.addEventListener("click", (event) => {
    handleDropDown(event);
  });
});
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
const getCheckedIds = () => {
  const checkboxes = document.querySelectorAll(
    "input.todo-checkBox:not([id='0'])"
  );
  return [...checkboxes]
    .filter((cb) => cb.checked)
    .map((cb) => parseInt(cb.id));
};
// 중요도 dropdown
const handleDropDown = (event) => {
  event.stopPropagation();

  const priorityBtn = event.target.closest(".priority-btn");
  const options = priorityBtn.querySelector(".priority-options");

  options.classList.toggle("show");
};
const handleIndividualCheck = () => {
  const allCheckboxes = document.querySelectorAll(
    "input.todo-checkBox:not([id='0'])"
  );
  const totalCount = allCheckboxes.length;
  const checkedCount = [...allCheckboxes].filter((cb) => cb.checked).length;
  topCheckBox.checked = totalCount === checkedCount && totalCount > 0;
};
const handleSelectAll = (isChecked) => {
  const allCheckboxes = document.querySelectorAll(
    "input.todo-checkBox:not([id='0'])"
  );
  allCheckboxes.forEach((cb) => {
    cb.checked = isChecked;
  });
};

//todo 추가하는 핸들러
const addTodo = () => {
  const input = document.querySelector(".todo-input").value.trim();
  const selectedPriority = document.querySelector(".priority-option.selected");
  if (!input || !selectedPriority) {
    alert("할 일과 중요도를 모두 입력하세요!");
    return;
  }

  const priority = selectedPriority.dataset.importance;
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

  todoList.forEach((todo) => {
    const tr = document.createElement("tr");

    // 1. 체크박스
    const tdCheckbox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = todo.id;
    checkbox.className = "todo-checkBox";
    checkbox.addEventListener("click", handleCheckBox);
    tdCheckbox.appendChild(checkbox);

    // 2. 중요도
    const tdImportance = document.createElement("td");
    tdImportance.textContent = todo.importance;

    // 3. 완료 여부
    const tdCompleted = document.createElement("td");
    tdCompleted.textContent = todo.completed ? "✅" : "❌";

    // 4. 할 일 내용
    const tdTitle = document.createElement("td");
    tdTitle.textContent = todo.title;

    // tr에 모든 td 추가
    tr.appendChild(tdCheckbox);
    tr.appendChild(tdImportance);
    tr.appendChild(tdCompleted);
    tr.appendChild(tdTitle);

    // 최종적으로 table에 추가
    todoTable.appendChild(tr);
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

  if (checkboxId === 0) {
    handleSelectAll(isChecked);
  } else {
    handleIndividualCheck();
  }
};
//삭제 버튼 핸들러
const handleDelete = () => {
  const checkedIds = getCheckedIds();
  if (checkedIds.length === 0) {
    alert("todo를 선택하세요.");
    return;
  }

  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  const updatedList = todoList.filter((todo) => !checkedIds.includes(todo.id));
  localStorage.setItem("todoList", JSON.stringify(updatedList));

  renderTodo();
};
// 완료 버튼 핸들러
const handleComplete = () => {
  const checkedIds = getCheckedIds();
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  const hasCompleted = todoList.some(
    (todo) => checkedIds.includes(todo.id) && todo.completed
  );

  if (hasCompleted) {
    alert("이미 완료된 todo입니다.");
    return;
  }

  const updatedList = todoList.map((todo) =>
    checkedIds.includes(todo.id) ? { ...todo, completed: true } : todo
  );
  localStorage.setItem("todoList", JSON.stringify(updatedList));

  renderTodo();
};
// 처음 실행될 때 render 해주기
renderTodo();
