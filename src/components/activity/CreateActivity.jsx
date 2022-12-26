import React, { useState } from 'react'
import CardFrame from '../ActivityList/CardFrame'
import CreateActivityForm from './CreateActivityForm'
const CreateActivity = () => {
  const [editClick, setEditClick] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  return (
    <div>
      <CreateActivityForm editClick={editClick} selectedItem={selectedItem} />
      <CardFrame
        editClick={editClick}
        setEditClick={setEditClick}
        setSelectedItem={setSelectedItem}
      />
    </div>
  )
}

export default CreateActivity
