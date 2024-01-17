import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './slices/noteSlice';
import todoListSlice from './slices/todoListSlice';

const store = configureStore({
    reducer: {  
        notes: noteSlice,
        todoList: todoListSlice,
    },
});

export default store;
