import React, { useState } from 'react'
import './index.css'
import  todo  from '../../mobx/store'
import { useHistory } from 'react-router-dom'

export const FormPage = () => {
    const [value, setvalue] = useState('')
    let history = useHistory()
    
    const onAddHandler = () => {
        if(value.trim()){
            todo.add(value)
            history.push('/home')
            setvalue('')
        }else{
            alert('write something :)')
        }
    }

    return (
        <div className='homePage'>
            <div className='form'>
                <input autoFocus  onChange={(e) => setvalue(e.currentTarget.value)} value={value} type="text"/>
                <button onClick={onAddHandler}>Add</button>
            </div>
        </div>
    )
}
