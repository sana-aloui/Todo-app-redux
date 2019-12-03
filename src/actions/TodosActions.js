import * as types from "../constants/ToDoActionTypes";

//we create the actions creators that are functions that create actions.
//before sending the payloads to the reducers.


export const addTodo = payload => ({
	type: types.ADD_TODO,
	payload
});


export const deleteTodo = payload => ({
	type: types.REMOVE_TODO,
	payload
});


export const editTodo = payload => ({
	type: types.EDIT_TODO,
	payload
});


export const toggleTask = payload => ({
	type: types.TOGGLE_TODO,
	payload
});

export const update = payload => ({
	type: types.UPDATE,
	payload
});
