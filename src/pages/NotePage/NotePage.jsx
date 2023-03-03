import React, { useState } from 'react';
import NewNoteform from '../../components/NewNoteForm/NewNoteForm';

export default function NotePage({ user }) {

    const [notes, setNotes] = useState([]);

    const addNote = (event) => {
        event.preventDefault();
        const newNote = {
            id: Date.now(),
            text: event.target.note.value,
        };
        setNotes([...notes, newNote]);
        event.target.note.value = '';
    };
    return (
        <div>
            <NewNoteform user={user} setNotes={setNotes} />
            {notes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>{note.text}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}