import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllList, createTask, deleteTask, updateTaskStatus } from '../services/todoListService'


export const fetchList = createAsyncThunk('todoList/fetchList', async () => {
  return getAllList();
});

export const addTask = createAsyncThunk('todoList/addtask', async (task) => {
  return createTask(task);

});

export const removeTask = createAsyncThunk('todoList/removeTask', async (id) => {
  await deleteTask(id);
  return { id }
});

export const updateTaskStatusAsync = createAsyncThunk('todoList/updateTaskStatus', async ({ id, task, status }) => {
  return updateTaskStatus(id, task, status );
});

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    tasks: [],
    lastTask: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.error = null; 
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        state.error = null; 
      })
  },
});

export default todoListSlice.reducer;


