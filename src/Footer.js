import React from 'react'
import'./App.css'
import IconButton from '@mui/material/IconButton';
import { GitHub } from '@mui/icons-material';

function Footer() {
    return (
        <footer>
            <a target='_blank' href="https://github.com/milkyascodes">
                <IconButton>
                    <GitHub/>
                </IconButton>
            </a>
            <br />
            Crud Todo App &copy; miki 2021
        </footer>
    )
}

export default Footer
