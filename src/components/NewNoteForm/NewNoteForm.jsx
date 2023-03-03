import { useState } from 'react';
import { createNote } from '../../utilities/notes-api'
export default function NewNoteform({ user, setNotes }) {

    const [newNotes, setNewNotes] = useState("");

    async function addNote(evt) {
        evt.preventDefault()
        try {
            const notes = await createNote({
                text: newNotes, user: user._id
            })
            setNotes(prevNotes => [...prevNotes, notes])
            setNewNotes('')
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <form onSubmit={addNote}>
                <input onChange={(evt) => setNewNotes(evt.target.value)} type="text" name="note" />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}