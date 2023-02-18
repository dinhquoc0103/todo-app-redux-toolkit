import { createSelector } from "reselect"

export const todoListSelector = state => state.todoList;

export const filtersSelector = state => state.filters;

export const todoListRemaining = createSelector([todoListSelector, filtersSelector],
    (todoList, filters) => {
        return todoList.filter(todo => {
            return todo.name.includes(filters.searchValue)
                && (filters.status === "All"
                    || todo.completed === (filters.status === "Completed" ? true : false))
                && (filters.priority === "default" || todo.priority === filters.priority);
        });
    }
) 