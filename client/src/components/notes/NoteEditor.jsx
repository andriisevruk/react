import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../slices/noteSlice';
import './css/NoteEditor.css'

function NoteEditor() {
    const dispatch = useDispatch();
    const [note, setNewNote] = useState('');
    const [selectedColor, setSelectedColor] = useState('light');

    const addNoteHandler = () => {
        if (note !== '') {
            dispatch(addNote({
                note,
                color: selectedColor,
            }));
            setNewNote('');
        }
    };

    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    const colorButtons = colors.map((color) => (
        <button
            key={color}
            className={`btn btn-${color} ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => handleColorSelection(color)}
            style={{ boxShadow: selectedColor === color ? '0 0 5px 4px black' : 'none' }}
        ></button>
    ));

    return (
        <div className="noteEditor" >
            <div className="input-group">
                <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Enter your note here ..."
                    value={note}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <button onClick={addNoteHandler} className="btn btn-outline-secondary" type="submit">Add note</button>
            </div>
            <div className='selectColor'>
                {colorButtons}
            </div>
        </div>
    )
}

export default NoteEditor