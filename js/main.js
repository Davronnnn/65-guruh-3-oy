const elTodos = document.querySelector('#todos');
const elTodoTemplate = document.querySelector('#todo-template');
const elNewTodoInput = document.querySelector('#new-todo');
let todos = [
	{
		id: 0,
		name: 'todo1',
		isCompleted: false,
		description: '',
	},
	{
		id: 1,
		name: 'todo2',
		isCompleted: true,
		description: '',
	},
	{
		id: 2,
		name: 'todo3',
		isCompleted: false,
		description: '',
	},
];

const renderTodos = (array, parent = elTodos) => {
	parent.textContent = '';
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < array.length; i++) {
		const todo = array[i];
		const cloneTodo = elTodoTemplate.content.cloneNode(true);
		const inputTodo = cloneTodo.querySelector('#todo-input');
		const delBtn = cloneTodo.querySelector('#delete-btn');
		const editBtn = cloneTodo.querySelector('#edit-btn');
		const checkBoxBtn = cloneTodo.querySelector('#checkbox');
		const span = cloneTodo.querySelector('span');

		if (todo.isCompleted) {
			checkBoxBtn.checked = 'true';
		}

		inputTodo.disabled = true;

		checkBoxBtn.dataset.id = todo.id;
		delBtn.dataset.id = todo.id;
		editBtn.dataset.id = todo.id;

		span.textContent = i + 1;
		inputTodo.value = todo.name;

		fragment.appendChild(cloneTodo);
	}

	parent.appendChild(fragment);
};

const addNewTodo = () => {
	const newTodo = {
		id: todos[todos.length - 1]?.id + 1 || 0,
		name: elNewTodoInput.value,
		isCompleted: false,
		description: '',
	};

	todos.push(newTodo);
	renderTodos(todos);
	elNewTodoInput.value = '';
};

const updateTodo = (id, name) => {
	todos.forEach((element) => {
		if (element.id === id) {
			element.name = name;
		}
	});
};

elTodos.addEventListener('click', (e) => {
	const element = e.target;

	if (element.className === 'fas fa-trash-alt') {
		const id = Number(element.dataset.id);

		todos = todos.filter((todo) => todo.id !== id);

		renderTodos(todos);
	}

	if (element.className === 'fas fa-pencil-alt me-3') {
		const id = Number(element.dataset.id);

		updateTodo(id, elNewTodoInput.value);
		elNewTodoInput.value = '';
		renderTodos(todos);
	}

	if (element.id === 'checkbox') {
		const id = Number(element.dataset.id);

		todos.forEach((element) => {
			if (element.id === id) {
				element.isCompleted = !element.isCompleted;
			}
		});

		renderTodos(todos);
	}
});

renderTodos(todos, elTodos);
