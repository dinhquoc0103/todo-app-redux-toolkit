import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoListSlice";

const reducer = {
    filters: filtersReducer,
    todoList: todoListReducer
}

const preloadedState = {
    filters: {
        searchValue: '',
        status: 'All',
        priority: 'default'
    },
    todoList: JSON.parse(localStorage.getItem("TODOLIST_STATE")) ?? []
}

const store = configureStore({
    reducer,
    preloadedState,
});

export default store;