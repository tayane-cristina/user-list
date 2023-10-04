import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Logo</h1>
            <div className='links-navbar'>
                <Link to="/">Home</Link>
                <Link to="/registrationpage">Cadastrar Notícias</Link>
                <span>Exibir Notícias</span>
                <div className='search-space'>
                    <TextField id="" label="Search" variant="standard" size='small' />
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </div>
    )

};
export default Navbar;