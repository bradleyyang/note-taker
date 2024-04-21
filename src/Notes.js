import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        if (!newNote) return;
        setNotes([...notes, newNote]);
    };

    return (
        <>
            <div className="w-screen h-screen bg-gray-800 flex text-black flex-col">
                <div>
                    <NoteForm addNote={addNote} />
                </div>
                <div>
                    <NoteList notes={notes} />
                </div>
                
                
            </div>
        </>
    )
}

export default Notes;