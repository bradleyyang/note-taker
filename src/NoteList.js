import React from 'react';

function NoteList({ notes }) {
  return (
    <ul className="text-white text-lg">
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
}

export default NoteList;
