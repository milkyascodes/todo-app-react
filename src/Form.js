import React, { useEffect, useState } from 'react'
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

    useEffect(() => {
        const todo = localStorage.getItem("todos")
       const inStorage = JSON.parse(todo)
       if(inStorage){
           setTodos(inStorage)
       }
    }, [])

    useEffect(() => {
        const todo = JSON.stringify(todos)
        localStorage.setItem("todos", todo)
    }, [todos])


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
    function editTodo(id){
        const updated = [...todos].map((todo) =>{
            const text = todo.text
            if(todo.id === id){
                todo.text=inputEditing
                if(todo.text === ''){
                    todo.text = text
                }
            }
            return todo
        })
        setTodos(updated)
        setTodoEditing(null)
        setInputEditing('')
       

    }
    function undoEdit(id){
        const updated = [...todos].map((todo)=>{
            const text = todo.text
            if(todo.id === id){
                todo.text = text
            }
            return todo
        })
        setTodos(updated)
        setTodoEditing(null)
        setInputEditing('')
    }


    return (
        <>
            <form>
                <input
                    onChange={e =>setInput(e.target.value.trimStart())}
                    value={input}
                    type="text"
                    autoFocus ={true}
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
                                            autoFocus ={true}
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
                                            onClick={()=>editTodo(todo.id)}
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
                                            onClick={()=>undoEdit(todo.id)}
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
