import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNotes } from '../../slices/noteSlice'

import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';
import NoteList from './NoteList';

import 'bootstrap/dist/css/bootstrap.css';
import './css/GetNotes.css'

function GetNotes() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch])

    return (
        <div className='notesPage'>
            <NoteEditor />
            <SearchBar />
            <NoteList />
        </div>
    );
}

export default GetNotes;
