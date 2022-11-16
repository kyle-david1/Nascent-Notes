import React from 'react';
import notes from '../assets/data';

const NotePage = ({match}) => {
  let noteId = match.params.id

  let note = notes.find(note => note.id  === noteId)
  return (
    <div>
        <p>{note?.id}</p>
    </div>
  )
}

export default NotePage;
