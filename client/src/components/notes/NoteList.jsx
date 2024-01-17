import { useSelector, useDispatch } from 'react-redux';
import { removeNote } from '../../slices/noteSlice'

import './css/NoteList.css';

function NoteList() {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes);
    const search = useSelector(state => state.notes.search);

    const handleDelete = (id) => {
        dispatch(removeNote(id));
    };

    console.log(notes);

    const filteredData = notes ? notes.filter((note) =>
        note.note.toLowerCase().includes(search.toLowerCase())
    ) : [];

    return (
        <div className='noteList'>
            {filteredData.length === 0 ? (
                <div>No notes available.</div>
            ) : (
                <div className="notes">
                    {filteredData.map((note) => (
                        <div key={note._id} className={`note bg-${note.color}`}>
                            <button onClick={() => handleDelete(note._id)} className="btn-close"></button>
                            <p>{note.note}</p>
                        </div>
                    )).reverse()}
                </div>
            )}
        </div>
    )

}

export default NoteList