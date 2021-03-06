import React, { useState } from 'react'

export const ListElement = ({ id, text, isDone, onDelete, onEdit, onToggle }) => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(text)
    
    const onHandlerSave = () => {
        onEdit(id, value)
        setEditMode(false)
    }

    return (
        <div className="listElement" style={{background: isDone ? 'firebrick' : 'unset'}}>
            {!editMode ?
                <>
                    <div className='listText' style={{color: isDone ? '#fff' : 'unset'}}>
                        <input className='toggleInput' onChange={() => onToggle(id)} checked={isDone} type='checkbox'/>
                        {text}
                    </div>
                    <div className='actions'>
                        <button onClick={() => setEditMode(true)}>Edit</button>
                        <button onClick={() => onDelete(id)}>Delete</button>
                    </div>
                </>
                :
                <>
                    <div className='listText'>
                        <input className='editInput' onChange={(e) => setValue(e.currentTarget.value)} value={value} type="text"/>
                    </div>
                    <div className='actions'>
                        <button onClick={onHandlerSave}>Save</button>
                    </div>
                </>
            }

        </div>
    )
}
