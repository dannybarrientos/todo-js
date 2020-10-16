import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//console.log(todoList.todos);

// Se puede hacer todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); // O Asi cuando es un solo argumento

//const newTodo = new Todo('Aprender JavaScript!!!');

//newTodo.imprimirClase();
//todoList.todos[0].imprimirClase()
console.log('todos', todoList.todos);



// const tarea = new Todo('Aprender JavaScript!!!');


// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123')
// setTimeout(() => {
//     localStorage.removeItem('mi-key');

// }, 1500)