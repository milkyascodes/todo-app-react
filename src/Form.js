import React, { useState } from 'react'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Form() {
    // const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    return (
        <>
            <form>
                <input
                    onChange={e =>setInput(e.target.value)}
                    value={input}
                    type="text"
                 />
                <IconButton>
                    <AddIcon color="primary"/>
                </IconButton>
            </form>
        </>
    )
}

export default Form
