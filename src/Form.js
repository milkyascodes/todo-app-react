import React, { useState } from 'react'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Form() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [todoEditing, setTodoEditing] = useState(null)
    const [inputEditing, setInputEditing] = useState('')


    function addTodo(e){
        const newTodo = {
            id:new Date().getTime(),
            text:input
        }
        setTodos([...todos].concat(newTodo))


        setInput('')
        e.preventDefault()
    }
    function deleteTodo(id){
        const updated = [...todos].filter(todo => todo.id !== id)
        setTodos(updated)

    }


    return (
        <>
            <form>
                <input
                    onChange={e =>setInput(e.target.value.trimStart())}
                    value={input}
                    type="text"
                 />
                <IconButton
                    type='submit'
                    onClick={addTodo}
                    disabled={!input}
                    color="primary">
                    <AddIcon />
                </IconButton>
            </form>

            <ul>
                {
                    todos.map(todo =>(
                        
                        <li>
                            {todoEditing ===todo.id?
                                (
                                    <div className="div">
                                        <input
                                            type="text" 
                                            onChange={e =>setInputEditing(e.target.value.trimStart())}
                                            value={inputEditing}
                                         />
                                    </div>
                                ):
                                (
                                    <span key={todo.id}>{todo.text}</span>
                                )
                            }
                            
                            <div className="button-container">
                                {todoEditing===todo.id ? 
                                    (
                                        <IconButton
                                            
                                            color="primary">
                                            <CheckIcon />
                                        </IconButton>
                                    ):
                                    (
                                        <IconButton
                                            onClick={()=>setTodoEditing(todo.id)}
                                            color="primary">
                                            <EditIcon />
                                        </IconButton>
                                    )
                                }
                                {todoEditing===todo.id?
                                    (
                                        <IconButton
                                           
                                            color="error">
                                            <CloseIcon />
                                        </IconButton>
                                    ):
                                    (
                                        <IconButton
                                            onClick={()=>deleteTodo(todo.id)}
                                            color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    )
                                }
                            
                            
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Form
