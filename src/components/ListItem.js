import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {
  return (
    <link to ={`/note/${note.id}`}>
        <div className='notes-list-item'>
            <h3>{note.body}</h3>
        </div>
    </link>
  )
}

export default ListItem

//use react router to display multiple pages
