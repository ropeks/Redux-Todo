import uuid from 'uuid';

// action types
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';
export const CLICK_TODO = 'CLICK_TODO';

// action creators
export function addTodo(value) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            value,
            completed: false
        }
    };
}

export function clearTodo() {
    return {
        type: CLEAR_TODO
    };
}

export function clickTodo(id) {
    return {
        type: CLICK_TODO,
        payload: id
    };
}