import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: 'sdsd',
    status: 'All',
    priority: 'Medium'
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        searchValueChanged(state, action) {
            state.searchValue = action.payload;
            return state;
        },
        statusChanged(state, action) {
            state.status = action.payload;
            return state;
        },
        priorityChanged(state, action) {
            state.priority = action.payload;
            return state;
        }
    }
});

export const {
    searchValueChanged,
    statusChanged,
    priorityChanged
} = filtersSlice.actions;

export default filtersSlice.reducer;