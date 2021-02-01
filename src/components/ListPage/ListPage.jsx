import { observer } from 'mobx-react-lite'
import React from 'react'
import  todo  from '../../mobx/store'
import './index.css'
import { ListElement } from './ListElement'

const ListPage = observer(() => {
    
    const onDelete = (id) => {
        let confirm = window.confirm('Are you sure???')
        if(confirm){
            todo.delete(id)
        }
    }

    const onEdit = (id, text) => {
        todo.edit(id, text)
    }

    const onToggle = (id) => {
        todo.toggle(id)
    }

    return (
        <div className='listPage'>
            <div className="list">
                {todo.list.length !== 0 
                ? 
                    todo.list.map(el => <ListElement key={el.id} el={el} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle}/>)
                :   
                    <div>List is empty</div>    
                }
            </div>
        </div>
    )
})

export default ListPage