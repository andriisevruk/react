import http from "./http-common";

export const getAllNotes = async () => {
    const response = await http.get('/api/notes');
    return response.data;
};

export const createNote = async (note) => {
    const response = await http.post('/api/notes', note);
    return response.data;
};

export const deleteNote = async (id) => {
    const response = await http.delete(`/api/notes/${id}`);
    return response.data;
};
