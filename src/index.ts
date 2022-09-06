import { Todo } from "./Todo";

type Todo = {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  notes: string;
  project: string;
};

const todos: Array<Todo> = [];

const createTodo = (todo: Todo): Todo => {
  const newTodo = Todo(
    todo.title,
    todo.description,
    todo.dueDate,
    todo.priority,
    todo.notes,
    todo.project
  );

  return newTodo;
};

const addTodoToArray = (todo: Todo) => {
  todos.push(todo);
  localStorage.setItem("todosArray", JSON.stringify(todos));
};

const deleteTodo = (index: string) => {
  todos.splice(Number(index), 1);
  renderTodos(todos);
};

if (localStorage.getItem("todosArray")) {
  const parsedArray: Array<Todo> = JSON.parse(
    localStorage.getItem("todosArray")!
  );

  todos.push(...parsedArray.map((el) => createTodo(el)));

  renderTodos(todos);
}

const saveToLocalStorage = (todos: object[]) => {
  localStorage.setItem("todosArray", JSON.stringify(todos));
};

export const handleSubmit = (e: Event) => {
  e.preventDefault();

  const title = document.querySelector("#title") as HTMLInputElement;

  const description = document.querySelector(
    "#description"
  ) as HTMLInputElement;

  const dueDate = document.querySelector("#date") as HTMLInputElement;

  const priority = document.querySelector("#priority") as HTMLSelectElement;

  const notes = document.querySelector("#notes") as HTMLInputElement;

  const project = document.querySelector("#project") as HTMLInputElement;

  const todo: Todo = Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    notes.value,
    project.value
  );

  createTodo(todo);

  addTodoToArray(todo);

  renderTodos(todos);
};

const form = document.querySelector("#form");

form?.addEventListener("submit", handleSubmit);

function renderTodos(todos: Array<Todo>) {
  const todosUl = document.querySelector("#todos-list");

  todosUl!.innerHTML = "";

  todos.forEach((todo: Todo) => {
    const newTodoEl = createTodoEl(todo);
    todosUl?.append(newTodoEl);
  });
}

function createTodoEl(todo: Todo) {
  const todoEl = document.createElement("p");
  todoEl.innerText = `${todo.title}, ${todo.description}, ${todo.dueDate},${todo.priority}, ${todo.notes}, ${todo.project}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  todoEl.append(deleteBtn);
  return todoEl;
}
