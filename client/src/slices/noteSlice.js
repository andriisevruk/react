import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllNotes, createNote, deleteNote } from '../services/notesService'

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
    return getAllNotes();
});

export const addNote = createAsyncThunk('notes/addNote', async (note) => {
    return createNote(note);

});

export const removeNote = createAsyncThunk('notes/removeNote', async (id) => {
    await deleteNote(id);
    return { id }
});

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        search: '',
    },
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.notes = action.payload;
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.notes.push(action.payload);
            })
            .addCase(removeNote.fulfilled, (state, action) => {
                state.notes = state.notes.filter((note) => note._id !== action.payload.id);
                state.error = null;
            })
    }
})

export const { updateSearch } = noteSlice.actions;
export default noteSlice.reducer;



