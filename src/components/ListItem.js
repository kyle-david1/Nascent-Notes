import React from 'react'

const ListItem = (props) => {
  console.log('NOTE:', props.note)
  return (
    <div className='notes-list-item'>
        <h3>{props.note.body}</h3>
    </div>
  )
}

export default ListItem

//use react router to display multiple pages
