import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // { id: 1, name: "Listening to music", completed: false, priority: "Medium" },
    // { id: 2, name: "Listening to music", completed: false, priority: "Medium" },
]

const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.unshift(action.payload);
            return state;
        },
        deleleTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload);
        },
        completedChanged(state, action) {
            const currentTodo = state.find(todo => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
            return state;
        },
    }
});

export const {
    addTodo,
    deleleTodo,
    completedChanged
} = todoListSlice.actions;

export default todoListSlice.reducer;