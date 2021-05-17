import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4 className="text-center">{todo.title}</h4 >
            <p className="text-center">{todo.desc}</p>
            <div className="text-center">
            <button className=" btn-sm btn btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete</button><hr/>
            </div>

        </div>
    )
}
