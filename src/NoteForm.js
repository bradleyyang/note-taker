import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-96 h-10 rounded-md border-black border-4"
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new note..."
      />
      <div className="p-3 rounded-md bg-zinc-400 w-24">
        <button type="submit">Add Note</button> 
      </div>
      
    </form>
  );
}

export default NoteForm;
