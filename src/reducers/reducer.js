import {
	ADD_TODO,
	EDIT_TODO,
	UPDATE,
	TOGGLE_TODO,
	REMOVE_TODO
} from "../constants/ToDoActionTypes";

import _ from 'lodash'

const INITIAL_DATA = { todos: [] };

const TodoReducer = (state = INITIAL_DATA, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TODO:
			let newTodo = {
				id: state.todos.length,
				// id:state,
				text: payload.text,
				completed: false,
				isEdited: false
			};
			return { ...state, todos: [...state.todos, newTodo] };

		case TOGGLE_TODO:
			let newTodos = state.todos;
			newTodos[action.payload].completed = !state.todos[action.payload]
				.completed;
			return { ...state, todos: newTodos };

		case EDIT_TODO:
			let newText =_.cloneDeep( state.todos);
			newText[action.payload.id].text =action.payload.text;
			newText[action.payload.id].isEdited =false;
			return {  todos: newText };

		// state.todos.splice(index, 1, {text:action.payload.text,completed: false,
		// 	isEdited: true});

		case UPDATE:
			let newState =_.cloneDeep(state.todos)
			newState[action.payload].isEdited = !newState[action.payload].isEdited;

			return { todos: newState };

		case REMOVE_TODO:
			return { todos: state.todos.filter(todo => todo.id !== action.payload) };

		default:
			return state;
	}
};

export default TodoReducer;
