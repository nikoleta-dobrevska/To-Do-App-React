import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? ("completed") : ("incompleted")}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" onClick={() => editTodo(task.id)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
            </div>
        </div>
    )
}